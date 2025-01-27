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
    <nav className=" px-6 py-4 bg-white shadow-lg relative">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {navBarIsOpen ? (
            <XMarkIcon
              className="h-6 w-6"
              style={{ color: 'var(--darkBlue)' }}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6"
              style={{ color: 'var(--darkBlue)' }}
            />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden absolute top-full left-0 w-full h-screen bg-buttonBackground transition-all duration-700 ease-in-out  transform ${
          navBarIsOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col justify-start p-4 align-baseline h-full space-y-4">
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
      </div>
    </nav>
  );
};

export default MobileNav;
