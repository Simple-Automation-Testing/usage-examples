import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import type {
  TWaitOpts,
  TActionOpts,
  TItemListAction,
  TItemListCheck,
  TItemListCompare,
  ButtonAction,
  ButtonContent,
  ButtonVisible,
  TextAction,
  TextContent,
  TextVisible,
} from '../../../lib';

type TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntryFields = 'title' | 'price' | 'buy';
type TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry = Omit<
  TItemListAction<{
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
  }>,
  '_action'
>;
declare function onBuyerClientPageGetRandomFieldValueFromCards(
  _field: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntryFields,
  descriptions?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry,
): Promise<string>;
declare function onBuyerClientPageGetSeveralRandomFieldValuesFromCards(
  _field?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntryFields,
  quantity?: number,
  descriptions?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry,
): Promise<string[]>;
declare function onBuyerClientPageGetRandomDataFromCards<
  T extends ReadonlyArray<TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntryFields>,
>(
  _fields: T,
  descriptions?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry,
): Promise<TobjectFromStringArray<T>>;

/** ====================== setKeys ================== */

/** ====================== setKeys ================== */

/** ====================== click ================== */

type TheaderClick = {
  signIn?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderClickResult = void;
declare function onBuyerClientPageClickHeader(data: TheaderClick, opts?: TActionOpts): Promise<TheaderClickResult>;

type TfooterClick = {
  faq?: ButtonAction;
  contactUs?: ButtonAction;
};
type TfooterClickResult = void;
declare function onBuyerClientPageClickFooter(data: TfooterClick, opts?: TActionOpts): Promise<TfooterClickResult>;

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
declare function onBuyerClientPageClickCards(data: TcardsClick, opts?: TActionOpts): Promise<TcardsClickResult>;

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
declare function onBuyerClientPageGetContentHeader<Tentry extends TheaderGetContent>(
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
declare function onBuyerClientPageGetContentFooter<Tentry extends TfooterGetContent>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TfooterGetContentResult>>;

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
  opts?: TActionOpts,
): Promise<TcardsGetContentResult>;

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
declare function onBuyerClientPageGetVisibilityHeader<Tentry extends TheaderGetVisibility>(
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
declare function onBuyerClientPageGetVisibilityFooter<Tentry extends TfooterGetVisibility>(
  data: Tentry,
  opts?: TActionOpts,
): Promise<TresultBasedOnArgument<Tentry, TfooterGetVisibilityResult>>;

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
  opts?: TActionOpts,
): Promise<TcardsGetVisibilityResult>;

/** ====================== getVisibility ================== */

/** ====================== waitContent ================== */

type TheaderWaitContent = {
  signIn?: ButtonContent;
  logOut?: ButtonContent;
};
type TheaderWaitContentResult = void;
declare function onBuyerClientPageWaitContentHeader(
  data: TheaderWaitContent,
  opts?: TActionOpts,
): Promise<TheaderWaitContentResult>;

type TfooterWaitContent = {
  faq?: ButtonContent;
  contactUs?: ButtonContent;
};
type TfooterWaitContentResult = void;
declare function onBuyerClientPageWaitContentFooter(
  data: TfooterWaitContent,
  opts?: TActionOpts,
): Promise<TfooterWaitContentResult>;

type TcardsWaitContent = TItemListCheck<{
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
type TcardsWaitContentResult = void;
declare function onBuyerClientPageWaitContentCards(
  data: TcardsWaitContent,
  opts?: TActionOpts,
): Promise<TcardsWaitContentResult>;

/** ====================== waitContent ================== */

type TonBuyerClientPageGetCollectionFromCardsEntry = Omit<
  TItemListAction<{
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
  }>,
  '_action'
>;
type TonBuyerClientPageGetCollectionFromCards = {
  title?: TextContent;
  price?: TextContent;
  buy?: ButtonContent;
};
type TonBuyerClientPageGetCollectionFromCardsCheck = TItemListCompare<{
  _whereContent: {
    title?: TextContent;
    price?: TextContent;
    buy?: ButtonContent;
  };
}>;
declare function onBuyerClientPageGetCollectionFromCards(
  descriptions?: TonBuyerClientPageGetCollectionFromCardsEntry,
): Promise<TonBuyerClientPageGetCollectionFromCards[]>;
declare function onBuyerClientPageWaitContentForCollectionCards(
  state: TonBuyerClientPageGetCollectionFromCardsCheck,
  waitingCheckOpts?: TWaitOpts,
  descriptions?: TonBuyerClientPageGetCollectionFromCardsEntry,
): Promise<void>;

export type TgetBuyerClientPageActionsTypes = {
  onBuyerClientPageGetRandomFieldValueFromCards: typeof onBuyerClientPageGetRandomFieldValueFromCards;
  onBuyerClientPageGetSeveralRandomFieldValuesFromCards: typeof onBuyerClientPageGetSeveralRandomFieldValuesFromCards;
  onBuyerClientPageGetRandomDataFromCards: typeof onBuyerClientPageGetRandomDataFromCards;
  onBuyerClientPageClickHeader: typeof onBuyerClientPageClickHeader;
  onBuyerClientPageClickFooter: typeof onBuyerClientPageClickFooter;
  onBuyerClientPageClickCards: typeof onBuyerClientPageClickCards;
  onBuyerClientPageGetContentHeader: typeof onBuyerClientPageGetContentHeader;
  onBuyerClientPageGetContentFooter: typeof onBuyerClientPageGetContentFooter;
  onBuyerClientPageGetContentCards: typeof onBuyerClientPageGetContentCards;
  onBuyerClientPageGetVisibilityHeader: typeof onBuyerClientPageGetVisibilityHeader;
  onBuyerClientPageGetVisibilityFooter: typeof onBuyerClientPageGetVisibilityFooter;
  onBuyerClientPageGetVisibilityCards: typeof onBuyerClientPageGetVisibilityCards;
  onBuyerClientPageWaitContentHeader: typeof onBuyerClientPageWaitContentHeader;
  onBuyerClientPageWaitContentFooter: typeof onBuyerClientPageWaitContentFooter;
  onBuyerClientPageWaitContentCards: typeof onBuyerClientPageWaitContentCards;
  onBuyerClientPageGetCollectionFromCards: typeof onBuyerClientPageGetCollectionFromCards;
  onBuyerClientPageWaitContentForCollectionCards: typeof onBuyerClientPageWaitContentForCollectionCards;
};
