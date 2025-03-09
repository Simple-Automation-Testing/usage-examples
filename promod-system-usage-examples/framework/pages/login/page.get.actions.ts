import { resolve } from 'path';
import { createPurePageActions } from 'promod-system';
import { isArray, isFunction } from 'sat-utils';

function getLoginPageActions(decorators = [], preSetUp?: () => void, postSetUp?: () => void) {
  const pagePath = resolve(__dirname, './page');

  if (!isArray(decorators)) {
    throw new TypeError('decorators should be an array');
  }

  if (preSetUp) {
    preSetUp();
  }

  const pageActions = createPurePageActions(pagePath);

  if (postSetUp) {
    postSetUp();
  }

  return decorators.reduce((actFlows, decorator) => {
    if (!isFunction(decorator)) {
      throw new TypeError('decorator should be a function that returns actions object');
    }

    return decorator(actFlows);
  }, pageActions);
}

getLoginPageActions.id = 'onLoginPage';

export { getLoginPageActions };
