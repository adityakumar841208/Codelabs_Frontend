import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import Announcements from './Announcements';
import Help from './Help';
import ServicesPage from './Services';
import FeedbackPage from './Feedback';
import Footer from '../utilitycomponents/Footer';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
import Community from './Community';
import ShowChat from './ShowChat';
import Courses from './Courses';


const Home = () => {
  const location = useLocation();

  // Determine what to render in the Content section
  const renderContent = () => {
    switch (location.pathname) {
      case '/home':
        return <Content />;
      case '/home/help':
        return <Help />;
      case '/home/services':
        return <ServicesPage />;
      case '/home/feedback':
        return <FeedbackPage />;
      case '/home/profile':
        return <Profile />;
      case '/home/community':
        return <Community />;
      case '/home/community/chat':
        return <ShowChat />;
      case '/home/courses':
        return <Courses />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-xl font-bold">Page Not Found</h1>
          </div>
        );
    }
  };

  const isHomeRoute = location.pathname.startsWith('/home');

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        {/* Navigation Section */}
        <div className="col-span-2 hidden md:block min-h-screen bg-slate-700">
          <Navigation />
        </div>

        {/* Content Section */}
        <div className="col-span-full md:col-span-7 ">
          {renderContent()}
        </div>

        {/* Announcements Section */}
        <div className="col-span-12 md:col-span-3 hidden lg:block min-h-screen">
          <Announcements />
        </div>
      </div>

      {/* Conditionally Render Footer */}
      {!isHomeRoute && <Footer />}
    </>
  );
};

export default Home;
