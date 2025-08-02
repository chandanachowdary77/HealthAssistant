import axios from 'axios';
import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  respond = async (condition: string) => {
  const prompt = `Give me simple health recommendations (food, exercise, yoga, water intake, sleep) for ${condition}. Keep it brief and in bullet format using plain text bullets like •. Do not use emojis.`;

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'openai/gpt-3.5-turbo', // or any model supported by OpenRouter
          messages: [
            { role: 'system', content: 'You are a helpful health assistant.' },
            { role: 'user', content: prompt },
          ],
        },
        {
          headers: {
            'Authorization': `Bearer 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`, // 🔐 Use your real key here
            'Content-Type': 'application/json',
          },
        }
      );

      const messageText = response.data.choices[0].message.content;
      const message = this.createChatBotMessage(`Here’s what I suggest for *${condition}*:\n\n${messageText}`);
      this.setState((prev: any) => ({ ...prev, messages: [...prev.messages, message] }));
    } catch (error) {
      console.error('OpenRouter API error:', error);
      const message = this.createChatBotMessage("Sorry, I couldn’t fetch suggestions right now. Please try again later.");
      this.setState((prev: any) => ({ ...prev, messages: [...prev.messages, message] }));
    }
  };

  defaultReply = () => {
    const message = this.createChatBotMessage("I'm still learning! Please mention a known health condition.");
    this.setState((prev: any) => ({ ...prev, messages: [...prev.messages, message] }));
  };
}

export default ActionProvider;
