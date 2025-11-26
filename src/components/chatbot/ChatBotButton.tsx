"use client";

import React from 'react';
import { ChatIcon, CloseIcon } from "@/icons";

interface ChatBotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ChatBotButton: React.FC<ChatBotButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
      aria-label={isOpen ? "Close chat bot" : "Open chat bot"}
    >
      {isOpen ? (
        <CloseIcon className="w-6 h-6" />
      ) : (
        <ChatIcon className="w-6 h-6" />
      )}
      
      {/* Pulse animation for when chat is closed */}
      {!isOpen && (
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
      )}
    </button>
  );
};