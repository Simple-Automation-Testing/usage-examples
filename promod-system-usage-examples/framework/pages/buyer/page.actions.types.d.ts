import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import type {
  TWaitOpts,
  TActionOpts,
  TItemListAction,
  TItemListCheck,
  TItemListCompare,
  TextAction,
  TextContent,
  TextVisible,
  ButtonAction,
  ButtonContent,
  ButtonVisible,
} from '../../../lib';

/** ====================== setKeys ================== */

/** ====================== setKeys ================== */

/** ====================== click ================== */

type TcardsClick = TItemListAction<{
  _whereContent: {
    title?: TextContent;
    price?: TextContent;
    buy?: ButtonContent;
  };
  _whereVisibiliy: {
    title?: TextVisible;
    price?: TextVisible;
    buy?: ButtonVisible;
  };
  _action: {
    title?: TextAction;
    price?: TextAction;
    buy?: ButtonAction;
  };
}>;
type TcardsClickResult = void;
declare function onBuyerClientPageClickCards(
  data: TcardsClick,
  opts?: TActionOpts
): Promise<TcardsClickResult>;

/** ====================== click ================== */

/** ====================== getContent ================== */

type TcardsGetContent = TItemListAction<{
  _whereContent: {
    title?: TextContent;
    price?: TextContent;
    buy?: ButtonContent;
  };
  _whereVisibiliy: {
    title?: TextVisible;
    price?: TextVisible;
    buy?: ButtonVisible;
  };
  _action: {
    title?: TextAction;
    price?: TextAction;
    buy?: ButtonAction;
  };
}>;
type TcardsGetContentResult = {
  _action: {
    title?: TextContent;
    price?: TextContent;
    buy?: ButtonContent;
  };
}[];
declare function onBuyerClientPageGetContentCards(
  data: TcardsGetContent,
  opts?: TActionOpts
): Promise<TcardsGetContentResult>;

/** ====================== getContent ================== */

/** ====================== getVisibility ================== */

type TcardsGetVisibility = TItemListAction<{
  _whereContent: {
    title?: TextContent;
    price?: TextContent;
    buy?: ButtonContent;
  };
  _whereVisibiliy: {
    title?: TextVisible;
    price?: TextVisible;
    buy?: ButtonVisible;
  };
  _action: {
    title?: TextAction;
    price?: TextAction;
    buy?: ButtonAction;
  };
}>;
type TcardsGetVisibilityResult = {
  undefined: {
    title?: TextVisible;
    price?: TextVisible;
    buy?: ButtonVisible;
  };
}[];
declare function onBuyerClientPageGetVisibilityCards(
  data: TcardsGetVisibility,
  opts?: TActionOpts
): Promise<TcardsGetVisibilityResult>;

/** ====================== getVisibility ================== */

export type TgetBuyerClientPageActionsTypes = {
  onBuyerClientPageClickCards: typeof onBuyerClientPageClickCards;
  onBuyerClientPageGetContentCards: typeof onBuyerClientPageGetContentCards;
  onBuyerClientPageGetVisibilityCards: typeof onBuyerClientPageGetVisibilityCards;
};
