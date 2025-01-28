import Link from 'next/link';

const DesktopSubLinks = ({ group }) => {
  return (
    <div
      className="absolute left-0 top-14 w-max h-40 overflow-auto transform origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-out shadow-xl bg-buttonBackground gap-2 flex flex-wrap flex-col py-3"
      style={{ transformOrigin: 'top' }}
    >
      {group.map((subLink, index) => (
        <Link
          key={index}
          href="#"
          className="block py-2 px-6 hover:bg-lightBlue hover:text-buttonBackground transition-all duration-300"
        >
          {subLink.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopSubLinks;
