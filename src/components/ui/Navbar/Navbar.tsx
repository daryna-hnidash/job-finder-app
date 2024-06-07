'use client';

import React from 'react';
import Link from 'next/link';
import { menu } from './menu.data';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/globalRedux/store';

export const Navbar = () => {
  const pathname = usePathname();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <header className="border-b">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-5 sm:px-6 md:flex-row">
        <Link
          className="mb-6 block rounded-full border border-teal-500 px-4 py-2 shadow-md md:mb-0 md:border-none md:p-0 md:shadow-none"
          href="/"
        >
          <h1 className="text-4xl font-bold text-teal-500 md:text-3xl">
            JobFinder
          </h1>
        </Link>

        <nav className="">
          <ul className="flex items-center gap-12">
            {menu.map((item) => (
              <li
                className={classNames(
                  'text-center text-2xl text-teal-500 transition hover:text-teal-700',
                  {
                    'font-semibold underline': pathname === item.link,
                    'rounded-full border border-teal-500 px-4 py-2 hover:bg-teal-500 hover:text-white':
                      item.name === 'Create profile',
                  }
                )}
                key={item.link}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <li
              className={classNames(
                'rounded-full border border-teal-500 px-4 py-2 text-center text-2xl text-teal-500 transition hover:bg-teal-500 hover:text-white',
                {
                  'font-semibold underline': pathname === '/create-profile',
                }
              )}
            >
              <Link href="/create-profile">
                {user ? 'My Profile' : 'Create Profile'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
