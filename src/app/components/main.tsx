
// Types
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Mock AI response function
const sendMessageToBot = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
  
  const responses = [
    "That's an interesting question! Let me help you with that.",
    "I understand what you're asking. Here's what I think...",
    "Great point! Based on what you've shared, I'd suggest...",
    "Thanks for asking! Here's a detailed response to your question.",
    "I'm here to help! Let me break this down for you.",
    "That's a thoughtful question. From my perspective...",
    "I appreciate you reaching out. Here's my take on this topic.",
    "Excellent question! I'd be happy to explain this further.",
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  if (message.length > 50) {
    return `${randomResponse} You've provided quite a bit of detail, which helps me give you a more comprehensive answer. Based on your message, I think the key points to consider are the context and the specific requirements you've mentioned.`;
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    return "Hello! Welcome to our AI chatbot. I'm here to help answer your questions and assist you with various topics. What would you like to discuss today?";
  } else {
    return `${randomResponse} Feel free to ask any follow-up questions if you need more clarification.`;
  }
};

export default sendMessageToBot