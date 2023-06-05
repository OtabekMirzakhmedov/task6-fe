
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useFormik } from 'formik';

function StartPage() {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values.username);
    },
  });

  return (
    <div>
      <div className='flex justify-center'>
        <p className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>MailClone</p>
      </div>
    <div className="flex justify-center">
      <form onSubmit={formik.handleSubmit} className="absolute m-3 w-1/3 focus:ring-2 focus:ring-red-500 shadow-xl border border-gray-200 rounded-lg">
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="h-14 w-full pl-10 pr-20 rounded-lg z-0"
          placeholder="Enter your Username..."
        />
        <div className="absolute top-2 right-2">
          <button
            type="submit"
            disabled={!formik.values.username}
            className={`h-10 w-10 text-white rounded-l ${
              formik.values.username ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-200'
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}




export default StartPage;
