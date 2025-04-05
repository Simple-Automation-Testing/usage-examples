import { provider } from '../framework';

const { suite, test } = provider.testRunner;

suite('Seller example ', () => {
  test('Seller checks interface elements', async ({ I }) => {
    await I.onLoginPageSetKeysPageElements({
      email: 'seller_email@some_domain.com',
      password: 'some_password',
    });
    await I.onLoginPageClickPageElements({ login: 'click' });
    await I.onSellerCompanyPageWaitContentHeader({
      signIn: 'You are signed in as seller',
    });
  });
});
