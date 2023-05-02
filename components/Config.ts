// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'NFT MarketPlace Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#5db4dd',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;