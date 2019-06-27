import React from "react";
import { ReactComponent as SendIcon } from "./images/send-icon.svg";
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

      <s.Content>
        {dialogue.messages.map(message => (
          <s.Message key={message.id} currentUser={message.user.id === 10}>
            <s.MessageText>{message.message}</s.MessageText>
            <s.MessageSendedAt>{message.sendedAt}</s.MessageSendedAt>
          </s.Message>
        ))}
      </s.Content>

      <s.SendMessage>
        <s.SendMessageInput />
        <s.SendMessageSubmit>
          <SendIcon />
        </s.SendMessageSubmit>
      </s.SendMessage>
    </s.Chat>
  );
};

export default Chat;
