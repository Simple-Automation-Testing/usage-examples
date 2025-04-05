import type { TCompareOpts } from 'sat-compare';

import { ItemList } from './list';

import type { LazyElement } from '../mock/element';
/**
 * @info BaseFragment class that should be extended by all page objects
 *
 * @example
 * class BuyerCardFragment extends BaseFragment {
 *
 * 	constructor(root, id) {
 * 		super(root, id);
 * 	}
 *
 */
export class BaseFragment {
  public id: string;

  private root: LazyElement;

  constructor(rootElement: LazyElement, id: string) {
    this.id = id;
    this.root = rootElement;
  }

  create(selector, name, ChildOrList, Child?) {
    return new ChildOrList(
      this.root[ChildOrList instanceof ItemList ? '$$' : '$'](selector),
      name,
      Child
    );
  }

  async setKeys(setKeysData) {
    for (const [key, value] of Object.entries(setKeysData)) {
      await this[key].sendKeys(value);
    }
  }

  async click(clickData) {
    for (const [key, value] of Object.entries(clickData)) {
      await this[key].click(value);
    }
  }

  async getContent(getContentData) {
    const result = {};

    for (const [key, value] of Object.entries(getContentData)) {
      result[key] = await this[key].getContent(value);
    }

    return result;
  }

  async getVisibility(getVisibilityData) {
    const result = {};

    for (const [key, value] of Object.entries(getVisibilityData)) {
      result[key] = await this[key].getVisibility(value);
    }

    return result;
  }

  async compareContent(content, opts?: TCompareOpts) {
    for (const [key, value] of Object.entries(content)) {
      const childItemComparisonResult = await this[key].compareContent(value, opts);
      if (childItemComparisonResult) {
        return true;
      }
    }

    return false;
  }

  async compareVisibility(visible, opts?: TCompareOpts) {
    for (const [key, value] of Object.entries(visible)) {
      const childItemComparisonResult = await this[key].compareVisibility(value, opts);
      if (childItemComparisonResult) {
        return true;
      }
    }

    return false;
  }
}
