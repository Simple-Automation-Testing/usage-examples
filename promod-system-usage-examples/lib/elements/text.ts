import { BaseElement } from '../base/element';

export type TextAction = null;
export type TextVisible = boolean;
export type TextContent = string;

export class Text extends BaseElement {
  constructor(rootElement, id) {
    super(rootElement, id);
  }
}
