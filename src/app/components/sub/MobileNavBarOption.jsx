import Link from 'next/link';
import { useState } from 'react';
import MobileGroupLink from './MobileGroupLink';
import MobileSubLinks from './MobileSubLinks';

const MobileNavBarOption = ({
  leftIcon: LeftIcon,
  label,
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
          <MobileGroupLink
            setGroupIsOpen={setGroupIsOpen}
            groupIsOpen={groupIsOpen}
            label={label}
          />
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
        <MobileSubLinks
          setGroupIsOpen={setGroupIsOpen}
          setNavBarIsOpen={setNavBarIsOpen}
          group={group}
          groupIsOpen={groupIsOpen}
        />
      )}
    </div>
  );
};

export default MobileNavBarOption;
