import { BaseFragment, Button } from '../../../lib';

export class FooterFragment extends BaseFragment {
  faq;
  contactUs;

  constructor(root, name) {
    super(root, name);

    this.faq = this.create('#faq', 'FAQ', Button);
    this.contactUs = this.create('#contact', 'Contact Us', Button);
  }
}
