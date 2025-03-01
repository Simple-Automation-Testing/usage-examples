import { BaseElement } from '../base/element';

export type InputAction = null;
export type InputVisible = boolean;
export type InputContent = string;
export type InputSetKeys = string;

export class Input extends BaseElement {
  constructor(rootElement, id) {
    super(rootElement, id);
  }
}
