import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import MobileLayout from './layouts/MobileLayout';

export default function App() {
  return (
    <Suspense fallback={null}>
      {useRoutes([
        {
          path: '/',
          element: <MobileLayout />,
          children: routes.map(route => ({
            ...route,
            element: <route.element />
          })),
        },
      ])}
    </Suspense>
  );
}
