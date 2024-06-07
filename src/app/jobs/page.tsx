'use client';

import useSWR from 'swr';
import { fetcher } from '@/utils/api';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/globalRedux/store';
import { Catalog } from '@/components/ui/Catalog';

export default function JobsPage() {
  const { user } = useSelector((state: RootState) => state.user);

  const [query, setQuery] = useState(user?.jobTitle || '');
  const [enabled, setEnabled] = useState(query.length > 0);

  const { data, error } = useSWR(
    enabled ? { url: 'https://jsearch.p.rapidapi.com/search', query } : null,
    fetcher
  );

  return (
    <div className="max-width-2xl container mx-auto p-6 text-gray-600">
      <div className="mb-10">
        <h1 className="mb-6 text-2xl font-semibold">
          It`s time to find your perfect job!
        </h1>
        {!user && (
          <div className="flex gap-4">
            <div className="flex items-center rounded-md border-2 border-teal-500 focus-within:ring-2 focus-within:ring-teal-500">
              <svg
                className="ml-2 h-6 w-6 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-96 px-4 py-3 text-xl focus:outline-none"
                onChange={(e) => {
                  setEnabled(false);
                  setQuery(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => setEnabled(true)}
              className="rounded-full border border-teal-500 px-4 py-2 text-center text-2xl text-teal-500 transition hover:bg-teal-500 hover:text-white"
            >
              Search
            </button>
          </div>
        )}
      </div>
      {!data && enabled && <p>Loading...</p>}
      {data && <Catalog jobs={data} />}
    </div>
  );
}
