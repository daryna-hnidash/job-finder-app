### JobFinder App

**[DEMO LINK]()**

## Description
This project is a job search application that allows users to search for job listings, view job details, like jobs, view liked jobs, and create a profile. The project utilizes the LetScrape Job Search API for fetching job data.

## Key Features
- **Job Search**: Users can search for jobs by title. Search results will be displayed as a list of job cards.
Job Details Page: Each job card has a 'details' button that leads to the job details page (/job-details/
), where users can view detailed information about the job.
- **Liked List**: Users can like jobs, and liked jobs will be stored in the localStorage. Liked jobs will be displayed on a separate page (/liked), where users can also remove it from the list.
- **Profile Creation**: Users can create a profile (/create-profile) with the following information: Name, Desired Job Title, About Me. Profile data will be stored in localStorage.
- **Job Recommendations**: When users visit the /jobs page, they will receive job recommendations based on their profile data. If there is no profile data available, users can still search for jobs.

## Technologies Used
- Next.js 14 with TypeScript: Main framework for building the application.
- Tailwind CSS: Used for styling the application. Basic styles should be used to ensure readability and structure.
- Formik with Yup: Used for form handling and validation.
- Axios with SWR Hooks (useSWR): Used for making queries to the LetScrape API and handling data fetching.

