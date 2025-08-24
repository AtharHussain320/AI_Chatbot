'use client'
import { useState } from "react";
import { Send, Bot, User, Paperclip, Smile } from 'lucide-react'

const ChatInput = ({ onSendMessage, disabled = false }: { 
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-end space-x-3">
        <div className="flex space-x-1 mb-2">
          <button
            className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 rounded-full hover:bg-gray-100 hover:scale-110"
            disabled={disabled}
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 rounded-full hover:bg-gray-100 hover:scale-110"
            disabled={disabled}
          >
            <Smile className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={disabled ? "AI is thinking..." : "Type your message..."}
            disabled={disabled}
            rows={1}
            className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed max-h-32 overflow-y-auto"
            style={{
              minHeight: '48px',
              lineHeight: '1.5',
            }}
          />
          
          {message.length > 0 && (
            <div className="absolute bottom-1 right-14 text-xs text-gray-400">
              {message.length}
            </div>
          )}
        </div>

        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full transition-all duration-200 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-105 active:scale-95"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};



export default ChatInput