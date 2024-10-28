import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load components
const Landing = lazy(() => import('../components/LandingPage'));
const Login = lazy(() => import('../components/Login'));
const Signup = lazy(() => import('../components/Signup'));
const Home = lazy(() => import('../components/Home'));
const Help = lazy(() => import('../components/Help'));
const Feedback = lazy(() => import('../components/Feedback'));
const ServicesPage = lazy(() => import('../components/Services'));




function AppRoutes() {
  return (
      <Suspense fallback={<div>Loading components...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Suspense>
  );
}

export default AppRoutes;
