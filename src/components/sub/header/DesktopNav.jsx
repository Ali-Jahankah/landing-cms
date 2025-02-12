import { navBarConfig } from '@/config/navbar';
import Link from 'next/link';
import DesktopGroupLink from './DesktopGroupLink';

const DesktopNav = () => {
  return (
    <div className="hidden w-full lg:flex justify-center text-xl flex-1">
      {navBarConfig.map((linkOption) =>
        linkOption.hasGroup ? (
          <DesktopGroupLink linkOption={linkOption} key={linkOption?.label} />
        ) : (
          <Link
            href={linkOption?.href}
            className="block py-2 px-4 hover:underline underline-offset-8 decoration-white rounded-lg hover:decoration-lightBlue transition-all duration-500 hover:bg-buttonBackground font-semibold"
            key={linkOption?.label}
            aria-label={`Navigate to ${linkOption?.label}`}
          >
            {linkOption?.label}
          </Link>
        )
      )}
    </div>
  );
};

export default DesktopNav;
