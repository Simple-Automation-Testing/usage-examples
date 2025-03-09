import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import type {
  TWaitOpts,
  TActionOpts,
  InputSetKeys,
  InputAction,
  InputContent,
  InputVisible,
  ButtonAction,
  ButtonContent,
  ButtonVisible,
} from '../../../lib';

/** ====================== setKeys ================== */

type TonLoginPageSetKeys = {
  email?: InputSetKeys;
  password?: InputSetKeys;
};
type TonLoginPageSetKeysResult = boolean;
declare function onLoginPageSetKeysPageElements<Tentry extends TonLoginPageSetKeys>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TonLoginPageSetKeysResult>;

/** ====================== setKeys ================== */

/** ====================== click ================== */

type TonLoginPageClick = {
  email?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TonLoginPageClickResult = boolean;
declare function onLoginPageClickPageElements<Tentry extends TonLoginPageClick>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TonLoginPageClickResult>;

/** ====================== click ================== */

/** ====================== getContent ================== */

type TonLoginPageGetContent = {
  email?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TonLoginPageGetContentResult = {
  email?: InputContent;
  password?: InputContent;
  login?: ButtonContent;
};
declare function onLoginPageGetContentPageElements<Tentry extends TonLoginPageGetContent>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TonLoginPageGetContentResult>>;

/** ====================== getContent ================== */

/** ====================== getVisibility ================== */

type TonLoginPageGetVisibility = {
  email?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TonLoginPageGetVisibilityResult = {
  email?: InputVisible;
  password?: InputVisible;
  login?: ButtonVisible;
};
declare function onLoginPageGetVisibilityPageElements<Tentry extends TonLoginPageGetVisibility>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TonLoginPageGetVisibilityResult>>;

/** ====================== getVisibility ================== */

/** ====================== waitContent ================== */

type TonLoginPageWaitContent = {
  email?: InputContent;
  password?: InputContent;
  login?: ButtonContent;
};
type TonLoginPageWaitContentResult = boolean;
declare function onLoginPageWaitContentPageElements<Tentry extends TonLoginPageWaitContent>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TonLoginPageWaitContentResult>;

/** ====================== waitContent ================== */

export type TgetLoginPageActionsTypes = {
  onLoginPageSetKeysPageElements: typeof onLoginPageSetKeysPageElements;
  onLoginPageClickPageElements: typeof onLoginPageClickPageElements;
  onLoginPageGetContentPageElements: typeof onLoginPageGetContentPageElements;
  onLoginPageGetVisibilityPageElements: typeof onLoginPageGetVisibilityPageElements;
  onLoginPageWaitContentPageElements: typeof onLoginPageWaitContentPageElements;
};
