import { getBuyerClientPageActions } from './pages/buyer/page.get.actions';
import { getSellerCompanyPageActions } from './pages/seller/page.get.actions';
import { getLoginPageActions } from './pages/login/page.get.actions';

const pageExtensions = [
  getBuyerClientPageActions,
  getSellerCompanyPageActions,
  getLoginPageActions,
];

export const extendActorActions = (propName: string) => {
  const actionGetter = pageExtensions.find(item => propName.includes(item.id));

  if (!actionGetter) {
    throw new Error(`${propName} is not found in page extensions`);
  }

  return actionGetter(
    // no decorators
    [
      actorObj => {
        for (const prop of Object.keys(actorObj)) {
          const originalMethod = actorObj[prop].bind(actorObj);

          actorObj[prop] = async (...args: any[]) => {
            console.log(`Calling ${prop} with args:`, args);
            const result = await originalMethod(...args);
            if (result) {
              console.log(`Result of ${prop}:`, result);
            }
            return result;
          };
        }

        return actorObj;
      },
    ],
    // no preSetUp
    () => {},
    // no postSetUp
    () => {},
  );
};
