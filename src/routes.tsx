import { lazy } from 'react';

export const routes = [
  { path: '/',         element: lazy(() => import('./pages/Login')) },
  // { path: '/dates',    element: lazy(() => import('./pages/SelectDates')) },
  // { path: '/yachts',   element: lazy(() => import('./pages/AvailableYachts')) },
  // { path: '/yacht/:id',element: lazy(() => import('./pages/YachtDetails')) },
  // { path: '/profile',  element: lazy(() => import('./pages/Profile')) },
  // { path: '/profile/edit', element: lazy(() => import('./pages/EditProfile')) },
];
