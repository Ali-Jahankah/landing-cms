import { navBarConfig } from '@/app/config/navbar';
import Link from 'next/link';

const DesktopNav = () => {
  return (
    <div className="hidden w-full lg:flex justify-center text-xl flex-1">
      {navBarConfig.map((linkOption, index) =>
        linkOption.hasGroup ? (
          <div
            className="relative py-2 px-4 cursor-pointer hover:underline underline-offset-8 decoration-white rounded-lg hover:decoration-lightBlue transition-all duration-500 hover:bg-buttonBackground group"
            key={index}
          >
            <div className="flex items-center gap-1">
              <h5>{linkOption.label}</h5>
              <linkOption.rightIcon width={24} height={24} />
            </div>
            <div
              className="absolute left-0 top-14 w-max h-40 overflow-auto transform origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-out shadow-xl bg-buttonBackground gap-2 flex flex-wrap flex-col py-3"
              style={{ transformOrigin: 'top' }}
            >
              {linkOption.group.map((subLink, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block py-2 px-6 hover:bg-lightBlue hover:text-buttonBackground transition-all duration-300"
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          </div>
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
