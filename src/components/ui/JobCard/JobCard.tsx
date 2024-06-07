'use client';

import { IJob } from '@/types/job.interface';
import React from 'react';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsGeoAlt } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { set } from '@/globalRedux/Features/currentJobSlice';
import { LikeButton } from '../LikeButton';


interface Props {
  job: IJob;
}

export const JobCard: React.FC<Props> = ({ job }) => {
  const dispatch = useDispatch();

  const setCurrentJob = () => {
    dispatch(set(job));
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('currentJob', JSON.stringify(job));
    }
  };

  return (
    <article className="flex flex-col justify-between rounded-lg border p-4 shadow-sm transition hover:shadow-lg">
      <div>
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center overflow-hidden">
            <img
              src={job.employer_logo}
              alt={`${job.employer_name} logo`}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold">{job.employer_name}</h1>
            <h2 className="text-xl font-semibold text-teal-800">
              {job.job_title}
            </h2>
          </div>
        </div>
        <div className="">
          <div>
            <p className="mb-3 line-clamp-3 flex-grow lg:line-clamp-6">
              {job.job_description}
            </p>
            <div className="mb-3 flex items-center gap-2 text-sm text-teal-800">
              <BsGeoAlt />
              {`${job.job_country}${job.job_city ? `, ${job.job_city}` : ''}`}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <LikeButton job={job} />
        <Link
          href={`/job-details/${job.job_posted_at_timestamp}`}
          className="flex w-max items-center gap-2 rounded-full border border-teal-800 px-4 py-2 font-medium text-teal-800 transition hover:scale-105 hover:shadow-md"
          onClick={setCurrentJob}
        >
          More details
          <FaArrowCircleRight />
        </Link>
      </div>
    </article>
  );
};
