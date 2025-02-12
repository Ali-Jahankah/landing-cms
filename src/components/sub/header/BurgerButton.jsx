import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const BurgerButton = ({ toggleMenu, navBarIsOpen }) => {
  return (
    <button
      type="button"
      className="lg:hidden"
      onClick={toggleMenu}
      aria-label={
        navBarIsOpen ? 'Close the navigation menu' : 'Open the navigation menu'
      }
    >
      {navBarIsOpen ? (
        <XMarkIcon className="h-6 w-6 text-darkBlue" />
      ) : (
        <Bars3Icon className="h-6 w-6 text-darkBlue" />
      )}
    </button>
  );
};

export default BurgerButton;
