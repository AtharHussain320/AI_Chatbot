import { Send, Bot, User, Paperclip, Smile } from 'lucide-react'


interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}





const ChatMessage = ({ message }: { message: Message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex items-start space-x-3 animate-fade-in-up ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-transform hover:scale-110 ${
        isUser ? 'bg-blue-500' : 'bg-gray-300'
      }`}>
        {isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-gray-600" />
        )}
      </div>

      <div className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 rounded-2xl text-sm sm:text-base relative transition-transform hover:scale-105 ${
        isUser 
          ? 'bg-blue-500 text-white ml-auto' 
          : 'bg-gray-200 text-gray-900 mr-auto'
      }`}>
        <p className="leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
        
        <div className={`text-xs mt-1 opacity-70 ${
          isUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>

        <div className={`absolute top-2 w-0 h-0 ${
          isUser 
            ? 'right-[-8px] border-l-[8px] border-l-blue-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent'
            : 'left-[-8px] border-r-[8px] border-r-gray-200 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent'
        }`} />
      </div>
    </div>
  );
};

export default ChatMessage