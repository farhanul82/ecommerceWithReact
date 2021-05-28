import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

import { RiChatSmile3Fill } from "react-icons/ri";

function ChatbotComponent() {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div className="chatBotDiv">
      {showBot && (
        <div className="chatBot">
          <Chatbot
            className="chatBotccccc"
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        </div>
      )}{" "}
      <a onClick={() => toggleBot((prev) => !prev)}>
        {" "}
        <RiChatSmile3Fill className="chatBotbtn">Bot</RiChatSmile3Fill>
      </a>
    </div>
  );
}

export default ChatbotComponent;
