import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';

const botName = "Health Assistant";

const config = {
  botName,
  initialMessages: [
    createChatBotMessage(`Hi! I'm your Virtual Health Assistant 🤖. Tell me your health concern.`)
  ],
  customComponents: {
    botAvatar: () => (
      <div className="bg-green-600 text-white text-lg rounded-full px-2 py-1">🤖</div>
    ),
    userAvatar: () => (
      <div className="bg-blue-600 text-white text-lg rounded-full px-2 py-1">👤</div>
    ),
    header: () => (
      <div className="bg-green-600 text-white text-lg font-bold p-3">
        Virtual Health Assistant
      </div>
    ),
    botMessage: (props: any) => (
      <div className="flex justify-start">
        <div className="bg-green-100 text-black p-3 rounded-xl shadow my-2 w-full whitespace-pre-wrap">
          {props.message.message}
        </div>
      </div>
    ),
    userMessage: (props: any) => (
      <div className="flex justify-end">
        <div className="bg-blue-100 text-black p-3 rounded-xl shadow my-2 w-full whitespace-pre-wrap">
          {props.message.message}
        </div>
      </div>
    )
  },
  customStyles: {
    botMessageBox: { backgroundColor: "blue" },
    chatButton: { backgroundColor: "#10b981" }
  }
};

export default config;
