import {
  GlobeAltIcon,
  ChevronDownIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
export const navBarConfig = [
  {
    label: 'Platform',
    leftIcon: GlobeAltIcon,
    rightIcon: ChevronDownIcon,
    hasGroup: true,
    group: [
      { label: 'Link 1', href: 'link-1' },
      { label: 'link 2', href: 'link-2' },
      { label: 'Link 3', href: 'link-3' },
      { label: 'Link 4', href: 'link-4' }
    ]
  },
  {
    label: 'Resources',
    leftIcon: CircleStackIcon,
    rightIcon: ChevronDownIcon,
    hasGroup: true,
    group: [
      { label: 'Link 1', href: 'link-1' },
      { label: 'link 2', href: 'link-2' },
      { label: 'Link 3', href: 'link-3' },
      { label: 'Link 4', href: 'link-4' }
    ]
  },
  {
    label: 'Company',
    leftIcon: BuildingOfficeIcon,
    rightIcon: ChevronDownIcon,
    hasGroup: true,
    group: [
      { label: 'Link 1', href: 'link-1' },
      { label: 'link 2', href: 'link-2' },
      { label: 'Link 3', href: 'link-3' },
      { label: 'Link 4', href: 'link-4' },
      { label: 'Link 1', href: 'link-1' },
      { label: 'link 2', href: 'link-2' },
      { label: 'Link 3', href: 'link-3' },
      { label: 'Link 4', href: 'link-4' }
    ]
  },
  {
    label: 'Customers',
    href: 'customers',
    leftIcon: UserGroupIcon,
    rightIcon: null,
    hasGroup: false
  },
  {
    label: 'Pricing',
    href: 'pricing',
    leftIcon: BanknotesIcon,
    rightIcon: null,
    hasGroup: false
  }
];
