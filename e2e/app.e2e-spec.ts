import { AcadglidFrontendWebDevelopmentSession13AssignmentsPage } from './app.po';

describe('acadglid-frontend-web-development-session13-assignments App', () => {
  let page: AcadglidFrontendWebDevelopmentSession13AssignmentsPage;

  beforeEach(() => {
    page = new AcadglidFrontendWebDevelopmentSession13AssignmentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
