import type { TCompareOpts } from 'sat-compare';
import type { LazyElement } from '../mock/element';

export type TBaseActions = {
  new (rootElement: LazyElement, id: string);

  setKeys(setKeysData): Promise<void>;

  click(clickData): Promise<void>;

  getContent(getContentData): Promise<unknown>;

  getVisibility(getVisibilityData): Promise<unknown>;

  compareContent(content, opts?: TCompareOpts): Promise<boolean>;

  compareVisibility(visible, opts?: TCompareOpts): Promise<boolean>;
};
