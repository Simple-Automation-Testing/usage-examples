import { wrapAsSingleton } from 'sat-utils';

import { BasePage, ItemList } from '../../../lib';

import { CardFragment } from './fragments/card.fragment';

import { HeaderFragment } from '../shared_fragments/header.fragment';
import { FooterFragment } from '../shared_fragments/footer.fragment';

class BuyerPage extends BasePage {
  header;
  footer;
  cards;

  constructor() {
    super('#my_page', 'Buyer client page');

    // this.header = this.create('#header', 'Header', HeaderFragment);
    // this.footer = this.create('#footer', 'Footer', FooterFragment);
    this.cards = this.create('.card_item', 'Cards', ItemList, CardFragment);
  }
}

const getPage = wrapAsSingleton(BuyerPage);

export { getPage };
