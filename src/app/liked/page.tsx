'use client';

import { Catalog } from '@/components/ui/Catalog';
import { RootState } from '@/globalRedux/store';
import { useSelector } from 'react-redux';

export default function Page() {
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <div className="max-width-2xl container mx-auto p-6 text-gray-600">
      <div className="mb-10">
        <h1 className="mb-6 text-2xl font-semibold">Jobs, that you liked:</h1>
      </div>
      {favorites.length
        ? <Catalog jobs={favorites} />
        : <p>Thete is no jobs added to favorites</p>
    }
    </div>
  );
}
