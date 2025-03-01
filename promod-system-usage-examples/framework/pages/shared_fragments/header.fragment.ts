import { BaseFragment, Button } from '../../../lib';

export class HeaderFragment extends BaseFragment {
  signIn;
  logOut;

  constructor(root, name) {
    super(root, name);

    this.signIn = this.create('#signIn', 'Sign In', Button);
    this.logOut = this.create('#signIn', 'Log out', Button);
  }
}
