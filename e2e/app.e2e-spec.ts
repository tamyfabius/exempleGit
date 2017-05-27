import { ExempleGitPage } from './app.po';

describe('exemple-git App', () => {
  let page: ExempleGitPage;

  beforeEach(() => {
    page = new ExempleGitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
