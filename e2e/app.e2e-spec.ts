import { StarterkitPage } from './app.po';

describe('starterkit App', () => {
  let page: StarterkitPage;

  beforeEach(() => {
    page = new StarterkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
