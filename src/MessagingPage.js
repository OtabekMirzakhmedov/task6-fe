import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SendMessage from "./SendMessage";
import EmailListItem from "./EmailListItem";

const MessagingPage = ({
  userName,
  sendMessage,
  messages,
  closeConnection,
}) => {
  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <form className="relative m-3 focus:ring-2 focus:ring-red-500 shadow-xl border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <div className="flex items-center">
              <button
                className="h-10 w-10 text-white rounded-l bg-red-500 hover:bg-red-600"
                aria-label="log out"
                onClick={closeConnection}
              >
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
        <SendMessage userName={userName} sendMessage={sendMessage} />
      </div>
      <div className="flex justify-center mt-3">
        {messages.length === 0 ? (
          <div className="flex-column justify-start p-5">
            <h1 className="text-xl font-bold mb-4  ">Inbox is empty</h1>
          </div>
        ) : (
          <div className="w-216 border-2 bg-white">
            <div className="flex-column justify-start p-5">
              <h1 className="text-xl font-bold mb-4  ">Inbox</h1>
            </div>

            <div className="flex justify-center">
              <div className="mb-6">
                {messages
                  .slice()
                  .reverse()
                  .map((message, index) => (
                    <EmailListItem
                      key={index}
                      author={message.sender}
                      subject={message.subject}
                      message={message.message}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingPage;
