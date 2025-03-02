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
  descriptions?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry
): Promise<string>;
declare function onBuyerClientPageGetSeveralRandomFieldValuesFromCards(
  _field?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntryFields,
  quantity?: number,
  descriptions?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry
): Promise<string[]>;
declare function onBuyerClientPageGetRandomDataFromCards<
  T extends ReadonlyArray<TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntryFields>
>(
  _fields: T,
  descriptions?: TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry
): Promise<TobjectFromStringArray<T>>;

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

/** ====================== waitContent ================== */

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
  opts?: TActionOpts
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
  descriptions?: TonBuyerClientPageGetCollectionFromCardsEntry
): Promise<TonBuyerClientPageGetCollectionFromCards[]>;
declare function onBuyerClientPageWaitContentForCollectionCards(
  state: TonBuyerClientPageGetCollectionFromCardsCheck,
  waitingCheckOpts?: TWaitOpts,
  descriptions?: TonBuyerClientPageGetCollectionFromCardsEntry
): Promise<void>;

export type TgetBuyerClientPageActionsTypes = {
  onBuyerClientPageGetRandomFieldValueFromCards: typeof onBuyerClientPageGetRandomFieldValueFromCards;
  onBuyerClientPageGetSeveralRandomFieldValuesFromCards: typeof onBuyerClientPageGetSeveralRandomFieldValuesFromCards;
  onBuyerClientPageGetRandomDataFromCards: typeof onBuyerClientPageGetRandomDataFromCards;
  onBuyerClientPageClickCards: typeof onBuyerClientPageClickCards;
  onBuyerClientPageGetContentCards: typeof onBuyerClientPageGetContentCards;
  onBuyerClientPageGetVisibilityCards: typeof onBuyerClientPageGetVisibilityCards;
  onBuyerClientPageWaitContentCards: typeof onBuyerClientPageWaitContentCards;
  onBuyerClientPageGetCollectionFromCards: typeof onBuyerClientPageGetCollectionFromCards;
  onBuyerClientPageWaitContentForCollectionCards: typeof onBuyerClientPageWaitContentForCollectionCards;
};
