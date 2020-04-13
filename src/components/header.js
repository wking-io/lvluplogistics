import { Link } from 'gatsby';
import React from 'react';

import { Image } from './images';
import { ContactIcon } from './icons';

const Header = ({ label }) => {
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
