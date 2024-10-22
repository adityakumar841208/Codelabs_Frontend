import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './utilitycomponents/Navbar';
import Footer from './utilitycomponents/Footer';
import { ThemeProvider } from '@emotion/react';
import Theme from './theme/Theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
