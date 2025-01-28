'use client';

import { useState } from 'react';
import MobileNav from './MobileNav';
import HeaderLogo from '../sub/HeaderLogo';
import BurgerButton from '../sub/BurgerButton';
import DesktopNav from './DesktopNav';

const NavBar = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);

  const toggleMenu = () => setNavBarIsOpen(!navBarIsOpen);

  return (
    <nav className="w-full px-4">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <DesktopNav />
        <BurgerButton toggleMenu={toggleMenu} navBarIsOpen={navBarIsOpen} />
      </div>
      <MobileNav
        setNavBarIsOpen={setNavBarIsOpen}
        navBarIsOpen={navBarIsOpen}
      />
    </nav>
  );
};

export default NavBar;
