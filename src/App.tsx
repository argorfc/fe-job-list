import React from 'react';
import { Job } from './features/job/Job';
import { Header } from './layout/Header';
import { MainLayout } from './layout/Main';
import { Route, Routes, Navigate } from 'react-router-dom';
import { JobDetail } from './features/job/JobDetail';

function App() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Job />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
