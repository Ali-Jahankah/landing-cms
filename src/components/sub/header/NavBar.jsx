import MobileNav from './MobileNav';
import HeaderLogo from './HeaderLogo';
import DesktopNav from './DesktopNav';

const NavBar = () => {
  return (
    <nav className="w-full px-4" aria-label="Main Navigation">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
