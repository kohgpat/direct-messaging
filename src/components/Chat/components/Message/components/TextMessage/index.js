import React from "react";
import * as s from "./styles";

const TextMessage = ({ message }) => {
  const isCurrentUser = message.user.id === 10;

  return (
    <s.Message isCurrentUser={isCurrentUser}>
      <s.MessageText>{message.message}</s.MessageText>
      <s.MessageSendedAt>{message.sendedAt}</s.MessageSendedAt>
    </s.Message>
  );
};

export default TextMessage;
