import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { Menu, MenuList, MenuItem, MenuButton, MenuLink } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';

import { Image } from './images';
import { ContactIcon, InstagramIcon, FacebookIcon } from './icons';

function useWindowWidth() {
  const [ isMobile, setSize ] = useState(typeof window != 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setSize(typeof window != 'undefined' && window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return isMobile;
}

const Header = ({ label }) => {
  const isMobile = useWindowWidth();
  return (
    <header className="flex items-center w-full px-8 md:px-16 py-2 md:py-4 bg-white">
      <Link
        className="block relative z-50"
        to="/"
        data-track
        data-event-category="Navigation"
        data-event-action="Viewed Home"
        data-event-label={`${label} - Logo`}
      >
        <Image image="logo" className="w-16 md:w-32 block" imgStyle={{ width: '100%', height: 'auto' }} />
      </Link>
      <nav className="flex-1 text-right flex items-center justify-end">
        <Link to="/#about" className="hidden md:block text-black hover:underline p-4 inline-block mr-6 lg:mr-12">
          About Us
        </Link>
        <Link to="/#testimonials" className="hidden md:block text-black hover:underline p-4 inline-block mr-6 lg:mr-12">
          Testimonials
        </Link>
        <Link to="/#contact" className="h-12 p-4 -mr-4 text-primary hover:text-primary-dark">
          <ContactIcon className="w-auto h-full" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
