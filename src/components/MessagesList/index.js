import React from "react";
import MessagesListTopbar from "../MessagesListTopbar";
import * as s from "./styles";

const MessagesList = ({ messages }) => {
  return (
    <s.MessagesList>
      <MessagesListTopbar />

      <s.List>
        {messages.map(item => (
          <s.Item key={item.id}>
            <s.ItemHeader>
              <s.ItemAvatar />

              <s.ItemInfo>
                <s.ItemUserName>{item.user.name}</s.ItemUserName>
                <s.ItemUserStatus>{item.user.status}</s.ItemUserStatus>
              </s.ItemInfo>

              <s.ItemSendAt>{item.sentAt}</s.ItemSendAt>
            </s.ItemHeader>

            <s.ItemMessage>{item.message}</s.ItemMessage>
          </s.Item>
        ))}
      </s.List>
    </s.MessagesList>
  );
};

export default MessagesList;
