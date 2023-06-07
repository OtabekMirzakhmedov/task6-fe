import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const StartPage = ({startMailing}) => {
    const [inputUserName, setInputUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    startMailing(inputUserName);
  };

  const handleChange = (event) => {
    setInputUserName(event.target.value);
  };

  return (
    <div className='flex-row justify-center h-screen items-center mx-auto mt-20'>
      <div className='flex justify-center'>
      <FontAwesomeIcon className="text-blue-500 text-4xl mb-3"   icon={faEnvelope} />
      </div>
      <div className='flex justify-center'>
        <p className='text-blue-500 text-6xl'>MailClone</p>
      </div>
      <div className='flex justify-center'>
        <p className='text-blue-500 text-2xl'>Enter you username and start mailing</p>
      </div>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="absolute m-3 w-1/3 focus:ring-2 focus:ring-red-500 shadow-xl border border-gray-200 rounded-lg">
        <input
          type="text"
          name="username"
          value={inputUserName}
          onChange={handleChange}
          className="h-14 w-full pl-10 pr-20 rounded-lg z-0"
          placeholder="Enter your Username..."
        />
        <div className="absolute top-2 right-2">
          <button
            type="submit"
            disabled={!inputUserName}
            className={`h-10 w-10 text-white rounded-l ${
              inputUserName ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-200'
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
