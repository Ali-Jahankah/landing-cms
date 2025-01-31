import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const MobileGroupLink = ({ groupIsOpen, setGroupIsOpen, label }) => {
  return (
    <div
      onClick={() => setGroupIsOpen(!groupIsOpen)}
      className="flex w-full items-center cursor-pointer"
    >
      <span className="text-lg font-semibold">{label}</span>
      {groupIsOpen ? (
        <ChevronUpIcon
          width={24}
          height={24}
          className="ml-auto"
          aria-hidden={true}
        />
      ) : (
        <ChevronDownIcon
          width={24}
          height={24}
          className="ml-auto"
          aria-hidden={true}
        />
      )}
    </div>
  );
};

export default MobileGroupLink;
