/** @types */
import { TgetBuyerClientPageActionsTypes } from './pages/buyer/page.actions.types';
import { TgetSellerCompanyPageActionsTypes } from './pages/seller/page.actions.types';
import { TgetLoginPageActionsTypes } from './pages/login/page.actions.types';

export type TPageTypes = TgetBuyerClientPageActionsTypes &
  TgetSellerCompanyPageActionsTypes &
  TgetLoginPageActionsTypes;
