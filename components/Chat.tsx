import React,{useState} from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Config'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import { ChatIcon } from '@chakra-ui/icons'

const Chat = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
      <div>
      <button className='chat_bot' onClick={handleChatbotClick}>
        <ChatIcon />
      </button>
      {showChatbot && (
        <div
          className='chat_bot_container'
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
    </>
  )
}

export default Chat
