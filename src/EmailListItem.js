import React from 'react'

const EmailListItem = ({ author, subject, message }) => {
  return (
    <div>
        <div className="flex items-center border-y hover:bg-gray-200 hover:shadow-md px-2 cursor-pointer">
            <div className="flex items-center py-1">
              <span className="w-56 pr-2 text-md">{author}</span>
              <span className="w-64 ">{subject}</span>
              <span className="mx-1">-</span>
              <span className="w-96 text-gray-600 text-sm">
                {message}
              </span>
            </div>
          </div>
      
    </div>
  )
}

export default EmailListItem
