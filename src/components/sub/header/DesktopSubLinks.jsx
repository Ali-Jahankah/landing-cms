import Link from 'next/link';

const DesktopSubLinks = ({ group }) => {
  return (
    <div
      className={`absolute left-0 top-14 w-max min-w-[400px] h-52 overflow-auto transform origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-out shadow-xl bg-buttonBackground gap-2 flex flex-wrap flex-col py-3`}
    >
      {group.map((subLink) => (
        <Link
          key={subLink?.label}
          href={subLink?.href}
          className="block font-medium py-2 px-6 hover:bg-lightBlue hover:text-buttonBackground transition-all duration-300"
          aria-label={`Navigate to ${subLink?.label}`}
        >
          {subLink?.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopSubLinks;
