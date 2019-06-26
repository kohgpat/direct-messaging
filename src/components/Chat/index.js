import React from "react";
import * as s from "./styles";

const Chat = ({ message }) => {
  if (!message) {
    return <s.Chat />;
  }

  return (
    <s.Chat message={message}>
      <s.Header>
        <s.HeaderUserAvatar />
        <s.HeaderUserInfo>
          <s.HeaderUserName>{message.user.name}</s.HeaderUserName>
          <s.HeaderUserStatus>{message.user.status}</s.HeaderUserStatus>
        </s.HeaderUserInfo>
      </s.Header>

      <s.Content />
    </s.Chat>
  );
};

export default Chat;
