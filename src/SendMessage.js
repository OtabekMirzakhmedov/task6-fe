import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const SendMessage = ({ userName, sendMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    sendMessage(userName, data.receiver, data.subject, data.message);
    reset();
  };
  const handleReset = () => {
    reset();
  };

  return (
    <div className="max-w-xl mx-auto border w-1/2 shadow-sm bg-white p-3">
      <div className="flex justify-between">
        <h2 className="text font-bold mb-4 flex justify-start ">New Message</h2>
        <button className="px-2 py-1 text" onClick={handleReset}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div>
          <input
            type="text"
            placeholder="Receiver"
            {...register("receiver", { required: true })}
            className="w-full h-12 outline-none border-b-2 mb-2"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
            className="w-full outline-none border-b-2 h-12 mb-2"
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            {...register("message", { required: true })}
            className="w-full outline-none h-32"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-xl bg-blue-800 p-1 px-2 text-white rounded-2xl"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
