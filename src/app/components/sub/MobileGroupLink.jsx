import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const MobileGroupLink = ({ groupIsOpen, setGroupIsOpen, label }) => {
  return (
    <div
      onClick={() => setGroupIsOpen(!groupIsOpen)}
      className="flex w-full items-center"
    >
      <h4>{label}</h4>
      {groupIsOpen ? (
        <ChevronUpIcon width={24} height={24} className="ml-auto" />
      ) : (
        <ChevronDownIcon width={24} height={24} className="ml-auto" />
      )}
    </div>
  );
};

export default MobileGroupLink;
