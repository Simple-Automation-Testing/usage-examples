import { getMochaPreparedRunner } from 'promod-system';
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

    return testRunner;
  },
};
