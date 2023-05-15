import React, { ReactNode } from "react";

interface ActionProviderProps {
  createChatBotMessage: (message: string) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: ReactNode;
}

interface ActionProviderActions {
  handleHello: () => void;
  handleFAQ: () => void;
  handleBuy: (nftId: string) => void;
  handleHelp: () => void;
  handleSell: () => void;
  handleList: () => void;
  handleCancel: () => void;
  handleBid: () => void;
  handleAccept: () => void;
  handleReject: () => void;
}

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: ActionProviderProps) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Add the handleFAQ and handleBuy functions to the actions object
  const handleFAQ = () => {
    const botMessage = createChatBotMessage(
      "Here are some frequently asked questions:\n\n" +
        "Q: What is an NFT?\n" +
        "A: An NFT, or non-fungible token, is a unique digital asset that is stored on a blockchain.\n\n" 
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBuy = (nftId: string) => {
    const botMessage = createChatBotMessage(
      `You want to buy NFT with ID ${nftId}.`
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHelp = () => {
    const botMessage = createChatBotMessage(
      "Here are some frequently asked questions:\n\n" +
        "Q: What is an NFT?\n" +
        "A: An NFT, or non-fungible token, is a unique digital asset that is stored on a blockchain.\n\n"
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSell = () => {
    const botMessage = createChatBotMessage(
      "How to sell an NFT:\n\n" +
        "1. Click on the 'Sell' button in the top middle corner of the screen.\n" +
        "2. CHeck of the NFT you want to sell.\n" +
        "3. Click on the 'Sell' button in the bottom right corner of the screen.\n" +
        "4. Enter the price you want to sell the NFT for.\n" +
        "5. Click on the 'Sell' button in the bottom right corner of the screen.\n" +
        "6. Confirm the transaction in your wallet.\n\n"
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleList = () => {
    const botMessage = createChatBotMessage(
      "How to list an NFT:\n\n" +
        "1. Click on the 'List' button in the top middle corner of the screen.\n" 
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCancel = () => {
    const botMessage = createChatBotMessage(
      "How to cancel an NFT:\n\n" +
        "1. Click on the 'List' button in the top middle corner of the screen.\n" +
        "2. Click on the 'Cancel' button in the bottom right corner of the screen.\n" +
        "3. Confirm the transaction in your wallet.\n\n"
    );
      
    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBid = () => {
    const botMessage = createChatBotMessage(
      "How to bid on an NFT:\n\n" +
        "1. Click on the 'Bid' button in the top middle corner of the screen.\n" +
        "2. Enter the price you want to bid on the NFT for.\n" +
        "3. Click on the 'Bid' button in the bottom right corner of the screen.\n" +
        "4. Confirm the transaction in your wallet.\n\n"
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAccept = () => {
    const botMessage = createChatBotMessage(
      "How to accept a bid on an NFT:\n\n" +
        "1. Click on the 'Bid' button in the top middle corner of the screen.\n" +
        "2. Click on the 'Accept' button in the bottom right corner of the screen.\n" +
        "3. Confirm the transaction in your wallet.\n\n"
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleReject = () => {
    const botMessage = createChatBotMessage(
      "How to reject a bid on an NFT:\n\n" +
        "1. Click on the 'Bid' button in the top middle corner of the screen.\n" +
        "2. Click on the 'Reject' button in the bottom right corner of the screen.\n" +
        "3. Confirm the transaction in your wallet.\n\n"
    );

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  

  // Put all the action functions in the actions object to pass to the MessageParser
  const actions: ActionProviderActions = {
    handleHello,
    handleFAQ,
    handleBuy,
    handleHelp,
    handleSell,
    handleList,
    handleCancel,
    handleBid,
    handleAccept,
    handleReject,
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;
