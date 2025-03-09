import { makePropertiesChainable } from 'chain-simple';
import { extendActorActions } from './page.extensions';

import type { TPageTypes } from './page.types';

export const I: TPageTypes = makePropertiesChainable({}, { extendProxed: extendActorActions });
