'use client';

import { format } from 'date-fns';
import { BsGeoAlt } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '@/globalRedux/store';
import { LikeButton } from '@/components/ui/LikeButton';


export default function Page() {
  const job = useSelector((state: RootState) => state.currentJob.currentJob);

  return (
    <div className="max-width-2xl container mx-auto p-6 text-lg text-gray-600">
      <div className="mb-4">
        <p className="text-xl">{job.employer_name}</p>
        {job.employer_website && (
          <a
            href={job.employer_website}
            target="blank"
            className="text-sm text-teal-800 transition hover:underline"
          >
            {job.employer_website}
          </a>
        )}
      </div>

      <div className="mb-4 items-center gap-4 md:flex">
        <div className="flex h-20 w-20 items-center overflow-hidden">
          <img
            src={job.employer_logo}
            alt={`${job.employer_name} logo`}
            className="w-full object-cover"
          />
        </div>
        <div>
          {job.job_posted_at_datetime_utc && (
            <p>
              Posted:{' '}
              {format(
                new Date(job.job_posted_at_datetime_utc),
                'MMMM d, yyyy, h:mm a'
              )}
            </p>
          )}
          <h1 className="text-3xl font-semibold">{job.job_title}</h1>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2 text-sm text-teal-800">
        <BsGeoAlt />
        {`${job.job_country}, ${job.job_city}`}
      </div>

      <div className="mb-6 grid gap-6">
        {job.job_highlights.Qualifications && (
          <div>
            <h2 className="mb-1 text-xl font-semibold text-teal-600">
              Qualifications
            </h2>
            <ul className="list-disc">
              {job.job_highlights.Qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {job.job_highlights.Responsibilities && (
          <div>
            <h2 className="mb-1 text-xl font-semibold text-teal-600">
              Responsibilities
            </h2>
            <ul className="list-disc">
              {job.job_highlights.Responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {job.job_highlights.Benefits && (
          <div>
            <h2 className="mb-1 text-xl font-semibold text-teal-600">
              Benefits
            </h2>
            <ul className="list-disc">
              {job.job_highlights.Benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="mb-1 text-xl font-semibold text-teal-600">
            Description
          </h2>
          <p>{job.job_description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {job.job_apply_link && (
          <a
            href={job.job_apply_link}
            className="flex w-max items-center gap-2 rounded-full border border-teal-800 px-4 py-2 text-2xl font-medium text-teal-800 transition hover:scale-105 hover:shadow-md"
            target="_blank"
          >
            Apply
            <FiArrowUpRight />
          </a>
        )}
        <LikeButton job={job} />
      </div>
    </div>
  );
}
