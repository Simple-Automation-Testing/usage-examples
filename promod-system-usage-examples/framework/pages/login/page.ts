import { wrapAsSingleton } from 'sat-utils';

import { BasePage, Input, Button } from '../../../lib';

class LoginPage extends BasePage {
  email;
  password;
  login;

  constructor() {
    super('#login_page', 'Login page');
    console.log('LoginPage constructor');
    this.email = this.create('#email', 'Email', Input);
    this.password = this.create('#pass', 'Password', Input);
    this.login = this.create('#login', 'Login', Button);
  }
}

export const getPage = wrapAsSingleton(LoginPage);
