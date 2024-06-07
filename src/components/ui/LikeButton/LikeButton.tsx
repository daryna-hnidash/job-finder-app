import { add, remove } from '@/globalRedux/Features/favoritesSlice';
import { RootState } from '@/globalRedux/store';
import { IJob } from '@/types/job.interface';
import React from 'react';
import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  job: IJob;
}

export const LikeButton: React.FC<Props> = ({ job }) => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();
  const isLiked = favorites.some((item: IJob) => item.job_id === job.job_id);

  const heartButtonHandler = () => {
    if (isLiked) {
      dispatch(remove(job.job_id));
      const newFavList = favorites.filter(
        (item: IJob) => item.job_id !== job.job_id
      );
      localStorage.setItem('favorites', JSON.stringify(newFavList));
    } else {
      dispatch(add(job));
      const newFavList = [...favorites, job];
      localStorage.setItem('favorites', JSON.stringify(newFavList));
    }
  };

  return (
    <button
      className="flex w-max items-center justify-center rounded-full border border-teal-800 p-2 text-xl text-teal-800 transition hover:scale-105 hover:shadow-md"
      onClick={heartButtonHandler}
    >
      {isLiked ? <GoHeartFill /> : <GoHeart />}
    </button>
  );
};
