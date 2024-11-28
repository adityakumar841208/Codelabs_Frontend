import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 border-t-2 border-customBorder">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} CodeLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
