import Link from 'next/link';

const DesktopSubLink = ({ group }) => {
  return group.map((subLink, index) => (
    <Link
      key={index}
      href="#"
      className="block py-2 px-6 hover:bg-lightBlue hover:text-buttonBackground transition-all duration-300"
    >
      {subLink.label}
    </Link>
  ));
};

export default DesktopSubLink;
