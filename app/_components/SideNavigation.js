"use client"

import {
  BuildingOffice2Icon,
  ChevronDownIcon,
  HomeIcon,
  NewspaperIcon,
} from '@heroicons/react/24/solid';
import SignOutButton from '../../starter/components/SignOutButton';
import Link from 'next/link';
import React from 'react';
import { Dropdown } from 'antd';

const dropdownItemsAbout = [
  {
    key: '1',
    label: <Link href='/about'>About Page</Link>,
  },
  {
    key: '2',
    label: <Link href='/about/journey'>About || Journey</Link>,
  },
  {
    key: '3',
    label: <Link href='/about/achieve'>About || Achieve</Link>,
  },
  {
    key: '4',
    label: <Link href='/about/leader'>About || Leader</Link>,
  },
];
const dropdownItemsArticle = [
  {
    key: '1',
    label: <Link href='/article/category'>Article || Category</Link>,
  },
  {
    key: '2',
    label: <Link href='/article/content'>Article || Detail</Link>,
  },
];

const navLinks = [
  {
    name: 'Home',
    href: '/home',
    icon: <HomeIcon className='h-5 w-5 text-primary-950 group-hover:text-white transition-colors' />,
  },
];

function SideNavigation() {
  return (
    <nav className='border-primary-900'>
      <ul className='flex flex-col gap-2 h-full text-lg'>
        {/* Link biasa */}
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}
              className="group flex items-center gap-4 font-semibold
                         py-3 px-5
                         bg-transparent
                         text-black
                         hover:bg-primary-900
                         hover:text-white
                         transition-colors"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

      <li>
      <Dropdown menu={{ items: dropdownItemsArticle }} trigger={['hover']}>
        <a
          onClick={(e) => e.preventDefault()}
          className="group flex items-center gap-4 font-semibold
                    py-3 px-5
                    bg-transparent
                    text-black
                    hover:bg-primary-900
                    hover:text-white
                    transition-colors cursor-pointer"
        >
          <NewspaperIcon className='h-5 w-5 text-primary-950 group-hover:text-white transition-colors' />
          <span>Article</span>
          <ChevronDownIcon className='h-5 w-5 text-primary-950 group-hover:text-white transition-colors' />
        </a>
      </Dropdown>
      </li>
      <li>
      <Dropdown menu={{ items: dropdownItemsAbout }} trigger={['hover']}>
        <a
          onClick={(e) => e.preventDefault()}
          className="group flex items-center gap-4 font-semibold
                    py-3 px-5
                    bg-transparent
                    text-black
                    hover:bg-primary-900
                    hover:text-white
                    transition-colors cursor-pointer"
        >
          <BuildingOffice2Icon className='h-5 w-5 text-primary-950 group-hover:text-white transition-colors' />
          <span>About</span>
          <ChevronDownIcon className='h-5 w-5 text-primary-950 group-hover:text-white transition-colors' />
        </a>
      </Dropdown>
      </li>


        {/* Sign Out */}
        <li className="font-semibold py-3 px-5 bg-transparent text-black hover:bg-primary-900 hover:text-white transition-colors">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;