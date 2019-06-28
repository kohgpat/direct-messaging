import React from "react";
import AudioMessage from "./components/AudioMessage";
import TextMessage from "./components/TextMessage";

const Message = ({ message }) => {
  let comp;

  switch (message.type) {
    case "text": {
      comp = <TextMessage message={message} />;
      break;
    }
    case "audio": {
      comp = <AudioMessage message={message} />;
      break;
    }
    default: {
      comp = null;
      break;
    }
  }

  return comp;
};

export default Message;
