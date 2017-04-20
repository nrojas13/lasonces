import { LasoncesPage } from './app.po';

describe('lasonces App', () => {
  let page: LasoncesPage;

  beforeEach(() => {
    page = new LasoncesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
