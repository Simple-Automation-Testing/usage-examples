import { getRandomNumberFromRange } from 'sat-utils';

export type LazyElement = {
  $(selector: string): LazyElement;
  $$(selector: string): LazyElement;
  get(index: number): LazyElement;

  getInputValue(): Promise<string>;
  click(): Promise<void>;
  set(value: string): Promise<void>;
  text(): Promise<string>;
  visible(): Promise<boolean>;

  amount(): Promise<number>;
};

/**
 * @info Mock for Element that has lazy like element initialization
 *
 * @example
 *
 * const element = $('selector');
 * const element2 = element.$('selector2').$$('selector3').get(1);
 */
class ElementMock {
  private selector: string;
  private index: number | undefined;

  constructor(selector: string, index?: number) {
    this.selector = selector;
    this.index = index;
  }

  async amount() {
    return getRandomNumberFromRange(2, 10);
  }

  get(index) {
    return new ElementMock(this.selector, index);
  }

  $(selector: string) {
    return new ElementMock(`${selector}`);
  }

  $$(selector: string) {
    return new ElementMock(selector);
  }
}

const $ = (selector): LazyElement => new ElementMock(selector) as unknown as LazyElement;
const $$ = (selector): LazyElement => new ElementMock(selector) as unknown as LazyElement;

export { $, $$, ElementMock };
