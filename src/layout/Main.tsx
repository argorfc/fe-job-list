import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Filter from '../app/components/Filter';
import Navigation from './Navigation';

export function MainLayout() {
  const location = useLocation();
  return (
    <main className="flex flex-col gap-4 pb-6">
      {location?.state?.isJobDetail ? <Navigation /> : <Filter />}
      <Outlet />      
    </main>
  )
}
