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
type TonBuyerClientPageGetRandomDataAndFieldValuesFromCardsEntry = undefined;
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

type TonBuyerClientPageGetCollectionFromCardsEntry = undefined;
type TonBuyerClientPageGetCollectionFromCards = unknown;
type TonBuyerClientPageGetCollectionFromCardsCheck = TItemListCompare<unknown, unknown>;
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
  onBuyerClientPageGetCollectionFromCards: typeof onBuyerClientPageGetCollectionFromCards;
  onBuyerClientPageWaitContentForCollectionCards: typeof onBuyerClientPageWaitContentForCollectionCards;
};
