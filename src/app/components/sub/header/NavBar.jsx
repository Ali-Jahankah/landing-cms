'use client';
import { useState } from 'react';
import MobileNav from './MobileNav';
import HeaderLogo from '../../sub/header/HeaderLogo';
import BurgerButton from '../../sub/header/BurgerButton';
import DesktopNav from './DesktopNav';

const NavBar = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);

  const toggleMenu = () => setNavBarIsOpen(!navBarIsOpen);

  return (
    <nav className="w-full px-4" aria-label="Main Navigation">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <DesktopNav />
        <BurgerButton
          toggleMenu={toggleMenu}
          navBarIsOpen={navBarIsOpen}
          aria-label="Toggle mobile menu"
        />
      </div>
      <MobileNav
        setNavBarIsOpen={setNavBarIsOpen}
        navBarIsOpen={navBarIsOpen}
      />
    </nav>
  );
};

export default NavBar;
