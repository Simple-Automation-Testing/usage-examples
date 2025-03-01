import { BaseElement } from '../base/element';

export type ButtonAction = null;
export type ButtonVisible = boolean;
export type ButtonContent = string;

export class Button extends BaseElement {
  constructor(rootElement, id) {
    super(rootElement, id);
  }
}
