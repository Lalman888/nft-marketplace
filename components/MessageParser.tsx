import React, { ReactNode } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: {
    handleHello: () => void;
    handleFAQ: () => void;
    handleBuy: (nftId: string) => void;
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
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
