import { navBarConfig } from '@/app/config/navbar';
import Link from 'next/link';
import DesktopGroupLink from '../sub/header/DesktopGroupLink';

const DesktopNav = () => {
  return (
    <div className="hidden w-full lg:flex justify-center text-xl flex-1">
      {navBarConfig.map((linkOption, index) =>
        linkOption.hasGroup ? (
          <DesktopGroupLink linkOption={linkOption} key={index} />
        ) : (
          <Link
            href="#"
            className="block py-2 px-4 hover:underline underline-offset-8 decoration-white rounded-lg hover:decoration-lightBlue transition-all duration-500 hover:bg-buttonBackground"
            key={index}
          >
            {linkOption.label}
          </Link>
        )
      )}
    </div>
  );
};

export default DesktopNav;
