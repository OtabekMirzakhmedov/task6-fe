import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import SendMessage from './SendMessage';

const MessagingPage = ({userName, setUserName}) => {
    const handleLogout = () => {
        setUserName('');
      };
  return (
    <div>
      <div className="container mx-auto flex justify-center bg-white">
        <form className="relative m-3 focus:ring-2 focus:ring-red-500 shadow-xl border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <div className="flex items-center">
              <button className="h-10 w-10 text-white rounded-l bg-red-500 hover:bg-red-600" aria-label='log out' onClick={handleLogout}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>
            <input
              type="text"
              className="h-10  pl-10 pr-20  z-0 text-black font-bold text-xl text-center"
              value={userName}
              disabled
            />
          </div>
        </form>
      </div>
      <div>
        <SendMessage/>
        </div>
    </div>
  )
}

export default MessagingPage;