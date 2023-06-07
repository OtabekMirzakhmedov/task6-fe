import React, { useState} from "react";
import StartPage from "./StartPage";
import MessagingPage from "./MessagingPage";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  console.log("app rendered");
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  const startMailing = async (userName) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7051/mailhub?username=" + userName)
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      setUserName(userName);

      connection.on("ReceiveMessage", (sender, subject, message) => {
        setMessages((messages) => [...messages, { sender, subject, message }]);
      });

      connection.onclose((e) => {
        setConnection();
        setMessages([]);
        setUserName();
      });

      connection.start();
      console.log("Connection ID:", connection.connectionId);
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };
  
  const sendMessage = async (sender, receiver, subject, message) => {
    try {
      await connection.invoke( "SendMessage", sender, receiver, subject, message );
     } catch (e) {
       console.log(e);
    }
  };

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!connection ? (
        <StartPage startMailing={startMailing} />
      ) : (
        <MessagingPage
          userName={userName}
          sendMessage={sendMessage}
          messages={messages}
          closeConnection={closeConnection}
        />
      )}
    </div>
  );
}

export default App;
