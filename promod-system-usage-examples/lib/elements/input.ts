import { BaseElement } from '../base/element';

export type InputAction = null;
export type InputVisible = boolean;
export type InputContent = string;
export type InputSetKeys = string;

export class Input extends BaseElement {
  constructor(rootElement, id) {
    super(rootElement, id);
  }

  async setKeys(setKeysData: string) {
    await this.root.set(setKeysData);
  }

  async getContent(..._args: unknown[]): Promise<string> {
    return await this.root.getInputValue();
  }
}
