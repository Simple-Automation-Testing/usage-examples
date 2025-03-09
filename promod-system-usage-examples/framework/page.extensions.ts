import { getBuyerClientPageActions } from './pages/buyer/page.get.actions';
import { getSellerCompanyPageActions } from './pages/seller/page.get.actions';
import { getLoginPageActions } from './pages/login/page.get.actions';

const pageExtensions = [getBuyerClientPageActions, getSellerCompanyPageActions, getLoginPageActions];

export const extendActorActions = propName => {
  const actionGetter = pageExtensions.find(item => propName.includes(item.id));

  if (!actionGetter) {
    throw new Error(`${propName} is not found in page extensions`);
  }

  return actionGetter(
    // no decorators
    [],
    // no preSetUp
    () => {},
    // no postSetUp
    () => {},
  );
};
