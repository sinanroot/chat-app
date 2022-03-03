import {ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';


import './App.css';

import LoginForm from './components/LoginForm';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine

        height="100vh"
        projectID="ada20c41-63ad-40aa-b7ac-a5d85cca9332"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}


    
    />
  )
}

export default App;












