"use client";

import React, { useState } from 'react';
import { ChatBotButton } from './ChatBotButton';
import { ChatBotUI } from './ChatBotUI';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ChatBotButton isOpen={isOpen} onClick={toggleChat} />
      {isOpen && <ChatBotUI onClose={handleClose} />}
    </>
  );
};