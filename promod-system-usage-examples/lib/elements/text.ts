import { BaseElement } from '../base/element';

export type TextAction = null;
export type TextVisible = boolean;
export type TextContent = string | ((t: string) => boolean) | RegExp;

export class Text extends BaseElement {
  constructor(rootElement, id) {
    super(rootElement, id);
  }
}
