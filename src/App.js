import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './utilitycomponents/Navbar';
import Footer from './utilitycomponents/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
