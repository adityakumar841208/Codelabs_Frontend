import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-8 border-t-2 border-customBorder">
      <div className="container mx-auto px-4">
        <div className='flex p-2 justify-around align-middle'>
          <div className="logo">CodeLabs Logo</div>
          <div>important links</div>
          <div>Social media icons</div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} CodeLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
