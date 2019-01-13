import { AngularFormsSomeA11yPage } from './app.po';

describe('angular-forms-some-a11y App', () => {
  let page: AngularFormsSomeA11yPage;

  beforeEach(() => {
    page = new AngularFormsSomeA11yPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
