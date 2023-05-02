import React, { ReactNode } from 'react';

interface ActionProviderProps {
  createChatBotMessage: (message: string) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: ReactNode;
}

interface ActionProviderActions {
  handleHello: () => void;
  handleFAQ: () => void;
  handleBuy: (nftId: string) => void;
}

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProviderProps) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Add the handleFAQ and handleBuy functions to the actions object
  const handleFAQ = () => {
    const botMessage = createChatBotMessage('Here are some frequently asked questions:\n\n' +
      'Q: What is an NFT?\n' +
      'A: An NFT, or non-fungible token, is a unique digital asset that is stored on a blockchain.\n\n' +
      'Q: How do I buy an NFT?\n' +
      'A: You can buy NFTs on various marketplaces that support them. Simply find the NFT you want to buy, and follow the instructions to purchase it.\n\n' +
      'Q: What can I do with an NFT?\n' +
      'A: You can collect NFTs as a hobby, or you can use them as a way to invest in digital assets. Some NFTs also come with special privileges or access to exclusive content.\n\n' +
      'Q: How do I sell an NFT?\n' +
      'A: You can sell NFTs on various marketplaces that support them. Simply list your NFT for sale, and wait for a buyer to purchase it.');
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  

  const handleBuy = (nftId: string) => {
    const botMessage = createChatBotMessage(`You want to buy NFT with ID ${nftId}.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put all the action functions in the actions object to pass to the MessageParser
  const actions: ActionProviderActions = {
    handleHello,
    handleFAQ,
    handleBuy,
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;
