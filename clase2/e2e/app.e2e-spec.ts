import { Clase2Page } from './app.po';

describe('clase2 App', function() {
  let page: Clase2Page;

  beforeEach(() => {
    page = new Clase2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
