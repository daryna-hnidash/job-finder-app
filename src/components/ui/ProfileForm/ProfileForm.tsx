'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { set } from '@/globalRedux/Features/userSlice';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string()
    .min(2, '*Must be 2 characters or more')
    .max(50, '*Must be 50 characters or less')
    .required('*Required'),
  jobTitle: Yup.string()
    .max(50, '*Must be 50 characters or less')
    .required('*Required'),
  aboutMe: Yup.string()
    .max(200, '*Must be 200 characters or less')
    .required('*Required'),
});

interface FormValues {
  email: string;
  name: string;
  jobTitle: string;
  about: string;
}

export const ProfileForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="m-auto md:max-w-md">
      <Formik
        initialValues={{ name: '', jobTitle: '', about: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const trimmedValues = Object.keys(values).reduce((acc, key) => {
            acc[key as keyof FormValues] =
              values[key as keyof FormValues].trim();
            return acc;
          }, {} as FormValues);

          console.log(trimmedValues);
          localStorage.setItem('user', JSON.stringify(trimmedValues));
          dispatch(set(trimmedValues));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block text-xl font-medium leading-6 text-teal-900"
              >
                Name:
              </label>
              <Field
                type="text"
                name="name"
                className="flex h-14 w-full rounded-md p-4 text-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-right font-semibold text-red-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-xl font-medium leading-6 text-teal-900"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="flex h-14 w-full rounded-md p-4 text-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-right font-semibold text-red-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="mb-2 block text-xl font-medium leading-6 text-teal-900"
              >
                Desired Job Title
              </label>
              <Field
                type="text"
                name="jobTitle"
                className="flex h-14 w-full rounded-md p-4 text-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset"
              />
              <ErrorMessage
                name="jobTitle"
                component="div"
                className="text-right font-semibold text-red-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="aboutMe"
                className="mb-2 block text-xl font-medium leading-6 text-teal-900"
              >
                About Me
              </label>
              <Field
                as="textarea"
                name="aboutMe"
                className="flex h-40 w-full rounded-md p-4 text-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset"
              />
              <ErrorMessage
                name="aboutMe"
                component="div"
                className="text-right font-semibold text-red-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-max items-center gap-2 rounded-full border border-teal-800 px-4 py-2 text-2xl font-medium text-teal-800 transition hover:bg-teal-800 hover:text-white hover:shadow-md"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
