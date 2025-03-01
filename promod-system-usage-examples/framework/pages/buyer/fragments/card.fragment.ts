import { BaseFragment, Text, Button } from '../../../../lib';

export class CardFragment extends BaseFragment {
  title;
  price;
  buy;

  constructor(root, name) {
    super(root, name);

    this.title = this.create('#title', 'Card title', Text);
    this.price = this.create('#price', 'Card price', Text);
    this.buy = this.create('#buy', 'Buy', Button);
  }
}
