import { ChevronDownIcon } from '@heroicons/react/24/outline';
import DesktopSubLinks from './DesktopSubLinks';

const DesktopGroupLink = ({ linkOption }) => {
  return (
    <div className="relative py-2 px-4 cursor-pointer hover:underline underline-offset-8 decoration-white rounded-lg hover:decoration-lightBlue transition-all duration-500 hover:bg-buttonBackground group">
      <div className="flex items-center gap-1">
        <h5>{linkOption.label}</h5>
        <ChevronDownIcon width={24} height={24} />
      </div>
      <DesktopSubLinks group={linkOption.group} />
    </div>
  );
};

export default DesktopGroupLink;
