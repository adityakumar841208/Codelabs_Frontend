import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Landing = lazy(() => import('../components/LandingPage'));
const Login = lazy(() => import('../components/Login'));
const Signup = lazy(() => import('../components/Signup'));

const AppRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoute
