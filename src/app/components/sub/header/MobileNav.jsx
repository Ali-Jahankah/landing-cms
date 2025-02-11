'use client';

import { navBarConfig } from '@/app/config/navbar';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import MobileNavBarOption from './MobileNavBarOption';

const MobileNav = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);
  const toggleMenu = () => setNavBarIsOpen(!navBarIsOpen);
  return (
    <>
      <BurgerButton
        toggleMenu={toggleMenu}
        navBarIsOpen={navBarIsOpen}
        aria-label="Toggle mobile menu"
      />
      <div
        className={`p-4 lg:hidden fixed top-16 bottom-0 left-0 w-full bg-buttonBackground transition-all duration-700 ease-in-out overflow-y-auto ${
          navBarIsOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
        }`}
      >
        {navBarConfig.map((linkOption, index) => (
          <MobileNavBarOption
            key={index}
            navBarIsOpen={navBarIsOpen}
            leftIcon={linkOption.leftIcon}
            label={linkOption.label}
            href={linkOption.href}
            hasGroup={linkOption.hasGroup}
            group={linkOption.group}
            setNavBarIsOpen={setNavBarIsOpen}
          />
        ))}
      </div>
    </>
  );
};

export default MobileNav;
