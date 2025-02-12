import {
  GlobeAltIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
export const navBarConfig = [
  {
    label: 'Platform',
    leftIcon: GlobeAltIcon,
    hasGroup: true,
    group: [
      { label: 'Link 1', href: '#link-1' },
      { label: 'link 2', href: '#link-2' },
      { label: 'Link 3', href: '#link-3' },
      { label: 'Link 4', href: '#link-4' }
    ]
  },
  {
    label: 'Resources',
    leftIcon: CircleStackIcon,
    hasGroup: true,
    group: [
      { label: 'Link 1', href: '#link-1' },
      { label: 'link 2', href: '#link-2' },
      { label: 'Link 3', href: '#link-3' },
      { label: 'Link 4', href: '#link-4' }
    ]
  },
  {
    label: 'Company',
    leftIcon: BuildingOfficeIcon,
    hasGroup: true,
    group: [
      { label: 'Link 1', href: '#link-1' },
      { label: 'link 2', href: '#link-2' },
      { label: 'Link 3', href: '#link-3' },
      { label: 'Link 4', href: '#link-4' },
      { label: 'Link 5', href: '#link-5' },
      { label: 'link 6', href: '#link-6' },
      { label: 'Link 7', href: '#link-7' },
      { label: 'Link 8', href: '#link-8' }
    ]
  },
  {
    label: 'Customers',
    href: '#customers',
    leftIcon: UserGroupIcon,
    hasGroup: false
  },
  {
    label: 'Pricing',
    href: 'pricing',
    leftIcon: BanknotesIcon,
    hasGroup: false
  }
];
