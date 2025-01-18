import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSkeleton from './LoadingSkeleton';


// Lazy load components
const Landing = lazy(() => import('../components/LandingPage'));
const Login = lazy(() => import('../components/Login'));
const Signup = lazy(() => import('../components/Signup'));
const Home = lazy(() => import('../components/Home'));
const Help = lazy(() => import('../components/Help'));
const Feedback = lazy(() => import('../components/Feedback'));
const ServicesPage = lazy(() => import('../components/Services'));
const Profile = lazy(() => import('../components/Profile'));
const Community = lazy(() => import('../community/Community'));
const ShowChat = lazy(() => import('../community/ShowChat'));
const Courses = lazy(() => import('../components/Courses'));
const ExploreChats = lazy(() => import('../community/ExploreChats'));
const ChatBot = lazy(() => import('../community/ChatBot'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(()=>import('../components/Contact'))
const Quiz = lazy(() => import('../components/Quiz'));
const QuizStart = lazy(() => import('../quiz/QuizLandingPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="quiz" element={<Quiz />} >
              <Route path='start' element={<QuizStart/>} />
          </Route>

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
