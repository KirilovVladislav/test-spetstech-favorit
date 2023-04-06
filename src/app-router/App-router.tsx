import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '@/app';

const Login = lazy(() => import('@/pages/login'));
const Error = lazy(() => import('@/pages/error'));

export const routes = [
  {
    element: <App />,
    errorElement: <Error />,
    children: [{ path: '/', element: <Login /> }],
  },
];

export function AppRouter() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
