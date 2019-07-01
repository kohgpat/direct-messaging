import React from "react";
import { useDirectUI } from "../../contexts/Direct/UI";
import { ReactComponent as SendIcon } from "./images/send-icon.svg";
import Message from "./components/Message";
import * as s from "./styles";

const Chat = ({ dialogue }) => {
  const { toggleAboutUser } = useDirectUI();

  if (!dialogue) {
    return <s.Chat />;
  }

  return (
    <s.Chat dialogue={dialogue}>
      <s.Header>
        <s.HeaderUserAvatar />
        <s.HeaderUserInfo>
          <s.HeaderUserName onClick={toggleAboutUser}>
            {dialogue.user.name}
          </s.HeaderUserName>

          <s.HeaderUserMeta>
            <s.HeaderUserStatus>{dialogue.user.status}</s.HeaderUserStatus>
            <s.HeaderUserSeparator>·</s.HeaderUserSeparator>
            <s.HeaderUserLastSeen>{dialogue.user.lastSeen}</s.HeaderUserLastSeen>
          </s.HeaderUserMeta>
        </s.HeaderUserInfo>
      </s.Header>

      <s.Content>
        {dialogue.messages.map(message => (
          <Message key={message.id} message={message} />
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
