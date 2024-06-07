'use client';

import { ExploreJobsBtn } from '@/components/ui/ExploreJobsBtn';
import { ProfileForm } from '@/components/ui/ProfileForm';
import { set as setUser } from '@/globalRedux/Features/userSlice';
import { RootState } from '@/globalRedux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfilePage() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const removeUser = () => {
    localStorage.removeItem('user');
    dispatch(setUser(null));
  };

  return (
    <div className="max-width-2xl container mx-auto p-6 text-gray-600">
      {user ? (
        <div className="grid gap-3">
          <div className="mb-3 text-2xl">
            Hello,{' '}
            <span className="font-semibold text-teal-800">{user.name}</span>!
          </div>
          <ExploreJobsBtn />
          <button
            onClick={removeUser}
            className="w-max rounded-full border border-teal-800 px-4 py-2 text-2xl font-medium text-teal-800 transition hover:bg-gray-700 hover:text-white hover:shadow-md"
          >
            Log out
          </button>
        </div>
      ) : (
        <ProfileForm />
      )}
    </div>
  );
}
