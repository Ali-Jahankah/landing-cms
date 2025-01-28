import { navBarConfig } from '@/app/config/navbar';
import NavBarOption from '../sub/navBarOption';

const MobileNav = ({ setNavBarIsOpen, navBarIsOpen }) => {
  return (
    <div
      className={`p-4 lg:hidden fixed top-16 bottom-0 left-0 w-full bg-buttonBackground transition-all duration-700 ease-in-out overflow-y-auto ${
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
  );
};

export default MobileNav;
