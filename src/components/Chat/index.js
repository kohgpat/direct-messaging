import React from "react";
import * as s from "./styles";

const Chat = ({ dialogue }) => {
  if (!dialogue) {
    return <s.Chat />;
  }

  return (
    <s.Chat dialogue={dialogue}>
      <s.Header>
        <s.HeaderUserAvatar />
        <s.HeaderUserInfo>
          <s.HeaderUserName>{dialogue.user.name}</s.HeaderUserName>
          <s.HeaderUserStatus>{dialogue.user.status}</s.HeaderUserStatus>
        </s.HeaderUserInfo>
      </s.Header>

      <s.Content />
    </s.Chat>
  );
};

export default Chat;
