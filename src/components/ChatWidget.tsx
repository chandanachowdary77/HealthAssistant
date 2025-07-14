import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chatbot/Chatbot.css';
import config from './Chatbot/ChatbotConfig';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';

const ChatWidget: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full cursor-pointer shadow-lg z-[9999]"
        onClick={() => setShowChat((prev) => !prev)}
      >
        💬
      </div>

      {/* Chat Popup Box */}
      {showChat && (
        <div className="fixed bottom-24 right-4 w-full max-w-[400px] h-[80vh] z-[9999] bg-white border border-green-300 shadow-2xl rounded-xl flex flex-col overflow-hidden">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
