import { render, screen } from '@testing-library/react';
import { createMockRouter, renderWithProviders } from '@/utils/test';

describe('AppRouter', () => {
  it('Render enchiridion if valid path', async () => {
    renderWithProviders(createMockRouter('/'));

    // await waitFor(() => {
    //   expect(screen.getByText(/enchiridion/i)).toBeInTheDocument();
    // });
    await screen.findByRole('heading', { name: /enchiridion/i });
  });
  it('Render not found if invalid path', async () => {
    render(createMockRouter('/this-route-dose-note-exist'));

    await screen.findByRole('heading', { name: /Not Found/i });
  });
});
