import React from "react";
import TextMessage from "./components/TextMessage";

const Message = ({ message }) => {
  let comp;

  if (message.audio) {
    comp = TextMessage;
  }

  return <TextMessage message={message} />;
};

export default Message;
