import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import Announcements from './Announcements';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 overflow-y-auto hidden md:block">
          <Navigation />
        </div>

        <div className="col-span-12 md:col-span-7">
          <Content />
        </div>

        <div className="col-span-3 overflow-y-auto hidden lg:block">
          <Announcements />
        </div>
      </div>
    </>
  );
};

export default Home;
