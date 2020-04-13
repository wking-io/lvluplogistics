import React from 'react';

const Footer = ({ label }) => (
  <footer className="px-6 py-2 flex flex-col-reverse sm:flex-row items-center bg-white">
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-0 flex-1">
      <p className="uppercase font-bold flex-shrink-0 mt-0">LVLUP Logistics</p>
      <p className="text-grey-500 flex-shrink-0 mt-0">&copy; 2020 All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
