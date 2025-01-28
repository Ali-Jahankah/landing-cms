import Link from 'next/link';

const MobileSubLinks = ({
  setGroupIsOpen,
  setNavBarIsOpen,
  group,
  groupIsOpen
}) => {
  return (
    <ul
      className={`flex flex-col gap-3 overflow-hidden  pl-6  bg-border justify-start content-start  ${
        groupIsOpen ? 'h-44 my-4 py-3 flex-wrap' : 'h-0'
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
  );
};

export default MobileSubLinks;
