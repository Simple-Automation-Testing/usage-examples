import { lengthToIndexesArray, asyncFilter, asyncMap } from 'sat-utils';

import type { TCompareOpts } from 'sat-compare';

import type { LazyElement } from '../mock/element';
import type { TBaseActions } from './.type.d';

/**
 * @info ItemList class that should be extended by all page objects
 *
 * @example
 * class BuyerCardFragment extends BaseFragment {
 *
 * 	constructor(root, id) {
 * 		super(root, id);
 * 	}
 *
 */

type TAction = {
  _whereContent?: unknown;
  _whereVisibiliy?: unknown;
  _action?: unknown;
};

export type TItemListAction<T extends TAction> = {
  _whereContent?: T['_whereContent'];
  _whereVisibiliy?: T['_whereVisibiliy'];
  _action?: T['_action'];
};

export type TItemListCheck<T extends TAction> = TItemListAction<T> &
  T['_whereContent'] &
  T['_whereVisibiliy'];

export type TItemListCompare<T extends TAction> = TItemListAction<T> &
  T['_whereContent'] &
  T['_whereVisibiliy'];

export type TItemListResultData<T> = T[];

export class ItemList {
  public id: string;

  private roots: LazyElement;
  private Item: TBaseActions;

  constructor(rootElements: LazyElement, id: string, Item: TBaseActions) {
    this.id = id;
    this.roots = rootElements;

    this.Item = Item;
  }

  getListItem(index: number) {
    return new this.Item(this.roots.get(index), `${this.id} item ${index}`);
  }

  private async getListItems(): Promise<TBaseActions[]> {
    const amountOfRootElementsOnPage = await this.roots.amount();

    return lengthToIndexesArray(amountOfRootElementsOnPage).map(index => this.getListItem(index));
  }

  private async findByContent(contentPattern, list?: TBaseActions[], opts?: TCompareOpts) {
    const items: TBaseActions[] = list || (await this.getListItems());

    return asyncFilter(items, async item => item.compareContent(contentPattern, opts));
  }

  private async findByVisibility(contentPattern, list?: TBaseActions[], opts?: TCompareOpts) {
    const items: TBaseActions[] = list || (await this.getListItems());

    return asyncFilter(items, async item => item.compareVisibility(contentPattern, opts));
  }

  private async findElements({ _whereContent, _whereVisibiliy }: TAction) {
    let items = await this.getListItems();

    if (_whereContent) {
      items = await this.findByContent(_whereContent, items);
    }

    if (_whereVisibiliy) {
      items = await this.findByVisibility(_whereVisibiliy, items);
    }

    return items;
  }

  async compareVisibility({ _whereVisibiliy, ...restData }) {
    return await this.findElements({ _whereVisibiliy: _whereVisibiliy || restData })
      .then(items => Boolean(items.length))
      .catch(() => false);
  }

  async compareContent({ _whereContent, ...restData }) {
    return await this.findElements({ _whereContent: _whereContent || restData })
      .then(items => Boolean(items.length))
      .catch(() => false);
  }

  async setKeys(setKeysData: TAction) {
    const { _action, ...searchParams } = setKeysData;

    const [fistElement] = await this.findElements(searchParams);

    return await fistElement.setKeys(_action);
  }

  async click(clickData) {
    const { _action, ...searchParams } = clickData;

    const [fistElement] = await this.findElements(searchParams);

    return await fistElement.click(_action);
  }

  async getContent(getContentData) {
    const { _action, ...searchParams } = getContentData;

    return asyncMap(
      await this.findElements(searchParams),
      async item => await item.getContent(_action)
    );
  }

  async getVisibility(getVisibilityData) {
    const { _action, ...searchParams } = getVisibilityData;

    return asyncMap(
      await this.findElements(searchParams),
      async item => await item.getVisibility(_action)
    );
  }
}
