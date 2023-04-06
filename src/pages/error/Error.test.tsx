import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMockRouter, renderWithProviders } from '@/utils/test';

describe('Page: Error', () => {
  renderWithProviders(createMockRouter('/this-route-dose-note-exist'));

  it('should show header and link to home page', async () => {
    const user = userEvent.setup();
    const linkToHomePage = await screen.findByRole('link', {
      name: /go home/i,
    });

    await screen.findByRole('heading', {
      name: /not found/i,
    });

    await user.click(linkToHomePage);

    await screen.findByRole('heading', {
      name: /home page/i,
    });
  });
});
