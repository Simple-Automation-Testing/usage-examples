import { getMochaPreparedRunner } from '../playground';
import { I } from './actor';

const fixtures = { I };

export const provider = {
  get testRunner() {
    type TTestOptions = {
      tags?: string | string[];
    };

    const { addReporters, updateCaseName, ...testRunner } = getMochaPreparedRunner<typeof fixtures, TTestOptions>(
      fixtures,
    );

    testRunner.test('a', async fx => {});

    return testRunner;
  },
};
