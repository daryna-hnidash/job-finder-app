import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const ExploreJobsBtn = () => {
  return (
    <Link
      href="/jobs"
      className="flex w-max items-center gap-2 rounded-full border border-teal-800 px-4 py-2 text-2xl font-medium text-teal-800 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-md"
    >
      Explore new jobs
      <FiArrowUpRight />
    </Link>
  );
};
