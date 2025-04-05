import { $ } from '../mock/element';

import { ItemList } from './list';

import type { LazyElement } from '../mock/element';
/**
 * @info BasePage class that should be extended by all page objects
 *
 * @example
 * class BuyerPage extends BasePage {
 * 	constructor() {
 * 		super('#my_page', 'Buyer client page');
 * 	}
 * }
 */
export class BasePage {
  public id: string;

  private selector: string;
  private root: LazyElement;

  constructor(selector: string, id: string) {
    this.selector = selector;
    this.id = id;
    this.root = $(selector);
  }

  create(selector, name, ChildOrList, Child?) {
    return new ChildOrList(this.root[ChildOrList instanceof ItemList ? '$$' : '$'](selector), name, Child);
  }

  async setKeys(setKeysData) {
    for (const [key, value] of Object.entries(setKeysData)) {
      await this[key].setKeys(value);
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

  async waitContent(waitContentData) {
    // TODO: add waitContent
    // console.log('waitContent logic here', waitContentData);
  }

  async waitVisibility(waitVisibilityData) {
    // TODO: add waitContent
    // console.log('waitContent logic here', waitVisibilityData);
  }

  async getVisibility(getVisibilityData) {
    const result = {};

    for (const [key, value] of Object.entries(getVisibilityData)) {
      result[key] = await this[key].getVisibility(value);
    }

    return result;
  }
}
