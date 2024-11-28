import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './utilitycomponents/Navbar';
import Footer from './utilitycomponents/Footer';
import { ThemeProvider } from '@emotion/react';
import Theme from './theme/Theme';
import Navbar2 from './utilitycomponents/Navbar2';


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
      {(!location.pathname.startsWith('/home')) ? <Navbar /> : <Navbar2 />}
      <AppRoutes />
      {(!location.pathname.startsWith('/home')) && <Footer />}
    </>
  );
}

export default App;
