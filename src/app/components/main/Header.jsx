import NavBar from '../sub/header/NavBar';
const Header = () => {
  return (
    <header
      role="banner"
      className="w-full shadow-lg sticky top-0 h-16 flex items-center z-50 bg-buttonBackground"
    >
      <NavBar />
    </header>
  );
};

export default Header;
