'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { navBarConfig } from '@/app/config/navbar';
import NavBarOption from '../sub/navBarOption';

const MobileNav = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);

  const toggleMenu = () => setNavBarIsOpen(!navBarIsOpen);

  return (
    <nav className="w-full px-4">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {navBarIsOpen ? (
            <XMarkIcon className="h-6 w-6 text-darkBlue" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-darkBlue" />
          )}
        </button>
      </div>
      <div
        className={`p-4 lg:hidden fixed top-16 bottom-0 left-0 w-full bg-buttonBackground transition-transform duration-700 ease-in-out overflow-y-auto ${
          navBarIsOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
        }`}
      >
        {navBarConfig.map((linkOption, index) => (
          <NavBarOption
            key={index}
            navBarIsOpen={navBarIsOpen}
            leftIcon={linkOption.leftIcon}
            label={linkOption.label}
            rightIcon={linkOption.rightIcon}
            href={linkOption.href}
            hasGroup={linkOption.hasGroup}
            group={linkOption.group}
            setNavBarIsOpen={setNavBarIsOpen}
          />
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
