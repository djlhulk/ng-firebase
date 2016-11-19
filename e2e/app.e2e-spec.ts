import { NgSportsPage } from './app.po';

describe('ng-sports App', function() {
  let page: NgSportsPage;

  beforeEach(() => {
    page = new NgSportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
