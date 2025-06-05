import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import MobileLayout from './layouts/MobileLayout';
import { AuthProvider } from './contexts/AuthContext';
import { YachtProvider } from './contexts/YachtContext';

export default function App() {
  return (
    <AuthProvider>
      <YachtProvider>
        <Suspense fallback={null}>
          {useRoutes([
            {
              path: '/',
              element: <MobileLayout />,
              children: routes.map(route => ({
                ...route,
                element: <route.element />,
              })),
            },
          ])}
        </Suspense>
      </YachtProvider>
    </AuthProvider>
  );
}
