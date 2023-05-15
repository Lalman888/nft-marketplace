import React, { ReactNode } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: {
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
  };
}

const MessageParser = ({ children, actions }: MessageParserProps) => {
  const parse = (message: string) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else if (message.includes('faq')) {
      actions.handleFAQ();
    } else if (message.includes('buy')) {
      const nftId = message.split(' ')[1];
      actions.handleBuy(nftId);
    } else if (message.includes('help')) {
       actions.handleHelp();
    } else if (message.includes('sell')) {
       actions.handleSell();
    } else if (message.includes('list')) {
        actions.handleList();
      }
    else if (message.includes('cancel')) {
        actions.handleCancel();
      }
    else if (message.includes('bid')) {
        actions.handleBid();
      }
    else if (message.includes('accept')) {
        actions.handleAccept();
      }
    else if (message.includes('reject')) {
        actions.handleReject();
      }
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement
        (child as React.ReactElement<any>, 
          {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
