import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '@/app-router';

export function createMockRouter(path = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
  });

  return <RouterProvider router={router} />;
}
