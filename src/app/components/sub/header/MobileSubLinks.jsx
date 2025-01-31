import Link from 'next/link';

const MobileSubLinks = ({
  setGroupIsOpen,
  setNavBarIsOpen,
  group,
  groupIsOpen
}) => {
  const handleLinkClick = () => {
    setGroupIsOpen(false);
    setNavBarIsOpen(false);
  };
  return (
    <ul
      className={`flex flex-col gap-3 overflow-hidden  pl-6  bg-border justify-start content-start  ${
        groupIsOpen ? 'h-44 my-4 py-3 flex-wrap' : 'h-0'
      } transition-all duration-500`}
      role="list"
    >
      {group.map((subLink, index) => (
        <li key={index}>
          <Link
            href={subLink?.href}
            className="p-2 px-6 inline-block font-medium hover:bg-lightBlue rounded-md hover:text-buttonBackground transition-all duration-500"
            onClick={handleLinkClick}
          >
            {subLink?.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileSubLinks;
