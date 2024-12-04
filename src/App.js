import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './utilitycomponents/Navbar';
import Footer from './utilitycomponents/Footer';
import Navigation from './components/Navigation'
import { ThemeProvider } from '@emotion/react';
import Theme from './theme/Theme';
import Navbar2 from './utilitycomponents/Navbar2';
import Announcements from './components/Announcements';


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  let location = useLocation();

  return (
    <>
      {
        !location.pathname.startsWith('/home') ? (
          <>
          {/* structure of the page for new users  */}
            {!location.pathname.startsWith('/home') ? <Navbar /> : <Navbar2 />}
            <AppRoutes />
            {!location.pathname.startsWith('/home') && <Footer />}
          </>
        ) : (
          <>

            {/* sturcture of the home page  */}
            <div className="grid grid-cols-12 min-h-screen">
              {/* Navigation Bar */}
              <div className="hidden md:block md:col-span-3 lg:col-span-2 bg-gray-800 min-h-screen">
                <Navigation />
              </div>

              {/* Main Content Section */}
              <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col">
                {/* Navbar */}
                <Navbar2 />

                {/* Content and Announcements */}
                <div className="grid grid-cols-10 flex-grow">
                  {/* Main Content */}
                  <div className="col-span-10 lg:col-span-7">
                    <AppRoutes />
                  </div>

                  {/* Announcements Section */}
                  <div className="hidden lg:block lg:col-span-3">
                    <Announcements />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default App;
