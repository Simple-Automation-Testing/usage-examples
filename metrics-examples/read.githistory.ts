import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { createDateIteration } from './date';

const { FOLDER_TO_CHECK } = process.env;

const testsPatternMatch = (commitFilesInfo: string) => {
  return Boolean(commitFilesInfo.match(/spec\.ts/gim));
};

const getChangedFiles = (folderPath: string, commitHash: string) => {
  const folderRepoCommitsCount = execSync(
    `cd ${folderPath}
			 git diff-tree ${commitHash} -r
		`,
  );

  return folderRepoCommitsCount.toString();
};

const getFolderCommits = (folderPath: string) => {
  if (!existsSync(folderPath)) {
    throw new Error(`${folderPath} not found`);
  }

  const commits = [];
  let skipIteration = 0;

  const folderRepoCommitsCount = Number(
    execSync(
      `cd ${folderPath}
		git rev-list --count HEAD
		`,
    ),
  );

  do {
    const iterationCommits = execSync(
      `cd ${folderPath}
			git log -n 10 --skip=${skipIteration}
		`,
    );

    skipIteration += 10;
    commits.push(
      ...iterationCommits
        .toString()
        .split('commit')
        .filter(i => Boolean(i.trim())),
    );
  } while (commits.length < folderRepoCommitsCount);

  return commits.map((commitLogStr: string) => {
    const [hash, author, date] = commitLogStr.split('\n').filter(Boolean);

    const changedFiles = getChangedFiles(folderPath, hash);
    return {
      hash: hash.trim(),
      authour: author.replace('Author:', '').trim(),
      date: date.replace('Date:', '').trim(),
      changedFiles,
      testCoverage: testsPatternMatch(changedFiles),
    };
  });
};

const allCommits = getFolderCommits(FOLDER_TO_CHECK);

const monthBased = {};
let monthIteration = 0;
const iterationByMonth = createDateIteration();

while (monthIteration < 24) {
  const dateData = iterationByMonth(monthIteration);
  monthIteration++;

  const monthCommits = allCommits.filter(({ date }) => {
    const numberDate = +new Date(date);
    return dateData.startRegular <= numberDate && dateData.endRegular >= numberDate;
  });

  monthBased[dateData.readable] = {
    withCoverage: monthCommits.filter(c => c.testCoverage).length,
    withoutCoverage: monthCommits.filter(c => !c.testCoverage).length,
  };
}

console.log(monthBased);
