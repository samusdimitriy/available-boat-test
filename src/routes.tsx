import { lazy } from 'react';

export const routes = [
  { path: '/', element: lazy(() => import('./pages/Login')) },
  { path: '/register', element: lazy(() => import('./pages/Register')) },
  { path: '/calendar', element: lazy(() => import('./pages/CalendarPage')) },
  { path: '/yachts', element: lazy(() => import('./pages/AvailableYachts')) },
  { path: '/yacht/:id', element: lazy(() => import('./pages/YachtDetails')) },
  { path: '/saved', element: lazy(() => import('./pages/Saved')) },
  { path: '/profile', element: lazy(() => import('./pages/Profile')) },
  { path: '/profile/edit', element: lazy(() => import('./pages/EditProfile')) },
];
