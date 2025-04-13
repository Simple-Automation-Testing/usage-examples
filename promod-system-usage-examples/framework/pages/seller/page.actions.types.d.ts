import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import type {
  TWaitOpts,
  TActionOpts,
  ButtonAction,
  ButtonContent,
  ButtonVisible,
} from '../../../lib';

/** ====================== setKeys ================== */

/** ====================== setKeys ================== */

/** ====================== click ================== */

type TheaderClick = {
  signIn?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderClickResult = void;
declare function onSellerCompanyPageClickHeader(
  data: TheaderClick,
  opts?: TActionOpts,
): Promise<TheaderClickResult>;

type TfooterClick = {
  faq?: ButtonAction;
  contactUs?: ButtonAction;
};
type TfooterClickResult = void;
declare function onSellerCompanyPageClickFooter(
  data: TfooterClick,
  opts?: TActionOpts,
): Promise<TfooterClickResult>;

/** ====================== click ================== */

/** ====================== getContent ================== */

type TheaderGetContent = {
  signIn?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderGetContentResult = {
  signIn?: ButtonContent;
  logOut?: ButtonContent;
};
declare function onSellerCompanyPageGetContentHeader<Tentry extends TheaderGetContent>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetContentResult>>;

type TfooterGetContent = {
  faq?: ButtonAction;
  contactUs?: ButtonAction;
};
type TfooterGetContentResult = {
  faq?: ButtonContent;
  contactUs?: ButtonContent;
};
declare function onSellerCompanyPageGetContentFooter<Tentry extends TfooterGetContent>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TfooterGetContentResult>>;

/** ====================== getContent ================== */

/** ====================== getVisibility ================== */

type TheaderGetVisibility = {
  signIn?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderGetVisibilityResult = {
  signIn?: ButtonVisible;
  logOut?: ButtonVisible;
};
declare function onSellerCompanyPageGetVisibilityHeader<
  Tentry extends TheaderGetVisibility,
>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetVisibilityResult>>;

type TfooterGetVisibility = {
  faq?: ButtonAction;
  contactUs?: ButtonAction;
};
type TfooterGetVisibilityResult = {
  faq?: ButtonVisible;
  contactUs?: ButtonVisible;
};
declare function onSellerCompanyPageGetVisibilityFooter<
  Tentry extends TfooterGetVisibility,
>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TfooterGetVisibilityResult>>;

/** ====================== getVisibility ================== */

/** ====================== waitContent ================== */

type TheaderWaitContent = {
  signIn?: ButtonContent;
  logOut?: ButtonContent;
};
type TheaderWaitContentResult = void;
declare function onSellerCompanyPageWaitContentHeader(
  data: TheaderWaitContent,
  opts?: TActionOpts,
): Promise<TheaderWaitContentResult>;

type TfooterWaitContent = {
  faq?: ButtonContent;
  contactUs?: ButtonContent;
};
type TfooterWaitContentResult = void;
declare function onSellerCompanyPageWaitContentFooter(
  data: TfooterWaitContent,
  opts?: TActionOpts,
): Promise<TfooterWaitContentResult>;

/** ====================== waitContent ================== */

export type TgetSellerCompanyPageActionsTypes = {
  onSellerCompanyPageClickHeader: typeof onSellerCompanyPageClickHeader;
  onSellerCompanyPageClickFooter: typeof onSellerCompanyPageClickFooter;
  onSellerCompanyPageGetContentHeader: typeof onSellerCompanyPageGetContentHeader;
  onSellerCompanyPageGetContentFooter: typeof onSellerCompanyPageGetContentFooter;
  onSellerCompanyPageGetVisibilityHeader: typeof onSellerCompanyPageGetVisibilityHeader;
  onSellerCompanyPageGetVisibilityFooter: typeof onSellerCompanyPageGetVisibilityFooter;
  onSellerCompanyPageWaitContentHeader: typeof onSellerCompanyPageWaitContentHeader;
  onSellerCompanyPageWaitContentFooter: typeof onSellerCompanyPageWaitContentFooter;
};
