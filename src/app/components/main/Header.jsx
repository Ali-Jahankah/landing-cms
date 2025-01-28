import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="w-full shadow-lg sticky top-0 h-16 flex items-center">
      <MobileNav />
    </header>
  );
};

export default Header;
