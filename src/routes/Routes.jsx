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
const Profile = lazy(() => import('../components/Profile'));
const Community = lazy(() => import('../components/Community'));
const ShowChat = lazy(() => import('../components/ShowChat'));
const Courses = lazy(() => import('../components/Courses'));
const ExploreChats = lazy(() => import('../components/ExploreChats'));
const ChatBot = lazy(() => import('../components/ChatBot'));




function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading components...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />

          <Route path="community" element={<Community />}>
            <Route path="chat" element={<ShowChat />} />
            <Route path="chatbot" element={<ChatBot />} />
            <Route path="explore-chats" element={<ExploreChats />} />
          </Route>
          
          <Route path="help" element={<Help />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
