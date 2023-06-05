import React from 'react';

const SendMessage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto border w-1/2 p-3">
      <h2 className="text-2xl font-bold mb-4">Send Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="receiver" className="block text-gray-700">
            Receiver:
          </label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            required
            className="w-full h-10 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-10"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 h-10">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
