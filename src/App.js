import React, {useState} from 'react';
import StartPage from './StartPage';
import MessagingPage from './MessagingPage';

function App() {
  const [userName, setUserName] = useState('');
  console.log(userName);
  return (
    <div>
      {userName ? (
        <MessagingPage userName={userName} setUserName={setUserName} />
      ) : (
        <StartPage setUserName={setUserName} />
      )}
    </div>
  );
}




export default App;
