import { ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const NavBarOption = ({
  leftIcon: LeftIcon,
  label,
  rightIcon: RightIcon,
  hasGroup,
  group,
  setNavBarIsOpen
}) => {
  const [groupIsOpen, setGroupIsOpen] = useState(false);
  return (
    <div>
      <div className=" w-48 flex gap-2 cursor-pointer hover:bg-lightBlue hover:text-buttonBackground p-4 transition-all duration-400">
        <LeftIcon width={24} height={24} />
        {hasGroup ? (
          <div
            onClick={() => setGroupIsOpen(!groupIsOpen)}
            className="flex w-full items-center"
          >
            <h4>{label}</h4>
            {groupIsOpen ? (
              <ChevronUpIcon width={24} height={24} className="ml-auto" />
            ) : (
              <RightIcon width={24} height={24} className="ml-auto" />
            )}
          </div>
        ) : (
          <Link
            href="#"
            className="block"
            onClick={() => setNavBarIsOpen(false)}
          >
            {label}
          </Link>
        )}
      </div>
      {hasGroup && (
        <ul
          className={`flex flex-col gap-3  pl-6 bg-border  ${
            groupIsOpen ? 'h-48 my-4' : 'h-0 overflow-hidden'
          } transition-all duration-500`}
        >
          {group.map((subLink, index) => (
            <li key={index}>
              <Link
                href="#"
                className="p-2 px-6 inline-block hover:bg-lightBlue rounded-md hover:text-buttonBackground transition-all duration-300"
                onClick={() => {
                  setGroupIsOpen(false);
                  setNavBarIsOpen(false);
                }}
              >
                {subLink.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBarOption;
