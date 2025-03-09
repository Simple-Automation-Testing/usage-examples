import { wrapAsSingleton } from 'sat-utils';

import { BasePage } from '../../../lib';

import { HeaderFragment } from '../shared_fragments/header.fragment';
import { FooterFragment } from '../shared_fragments/footer.fragment';

class SellerPage extends BasePage {
  header;
  footer;
  cards;

  constructor() {
    super('#seller_page', 'Seller company page');

    this.header = this.create('#header', 'Header', HeaderFragment);
    this.footer = this.create('#footer', 'Footer', FooterFragment);
  }
}

export const getPage = wrapAsSingleton(SellerPage);
