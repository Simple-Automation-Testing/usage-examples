import { compare } from 'sat-compare';

import type { TCompareOpts } from 'sat-compare';

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
 * }
 */
export type TWaitOpts = unknown;
export type TActionOpts = unknown;

export class BaseElement {
  public id: string;

  private root: LazyElement;

  constructor(rootElement: LazyElement, id: string) {
    this.id = id;
    this.root = rootElement;
  }

  async setKeys(setKeysData: string) {
    await this.root.set(setKeysData);
  }

  async click() {
    await this.root.click();
  }

  async getContent() {
    return await this.root.text();
  }

  async getVisibility() {
    return await this.root.visible();
  }

  async compareContent(content, opts?: TCompareOpts) {
    const currentContent = await this.getContent();

    return compare(currentContent, content, opts).result;
  }

  async compareVisibility(visible, opts?: TCompareOpts) {
    const currentContent = await this.getContent();

    return compare(currentContent, visible, opts).result;
  }
}
