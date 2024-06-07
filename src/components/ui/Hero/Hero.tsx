import React from 'react';
import { ExploreJobsBtn } from '../ExploreJobsBtn';


const Hero = () => {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="mt-10 text-center">
        <h1 className="mb-4 text-2xl font-bold text-teal-600 md:text-5xl">
          Find Your Dream Job
        </h1>
        <p className="mb-10 text-gray-700">
          Explore thousands of opportunities and take the next step in your
          career.
        </p>
      </div>
      <div className="mb-10 flex flex-col items-center gap-4">
        <ExploreJobsBtn />
      </div>
      <div className="text-center text-xl md:text-2xl">
        <p className="mb-6 max-w-3xl m-auto">
          Welcome to JobFinder - the best resource for job seekers, bringing
          together job postings from leading sites like LinkedIn, Indeed,
          Glassdoor, ZipRecruiter, Monster, and many other public job sites!
        </p>
        <p className="font-semibold text-teal-600">
          JobFinder - All the jobs you're looking for, in one place!
        </p>
      </div>
    </div>
  );
};

export default Hero;
