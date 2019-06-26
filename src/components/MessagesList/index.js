import React from "react";
import MessagesListTopbar from "../MessagesListTopbar";
import * as s from "./styles";

const MessagesList = () => {
  const messages = [
    {
      id: 1,
      user: {
        name: "Donald Johnson",
        status: "Online"
      },
      message: "Analysis of foreign experience, as it is common"
    },
    {
      id: 2,
      user: {
        name: "Anna Dormun",
        status: "Offline"
      },
      message: "It seems logical that the strategy of providing!"
    },
    {
      id: 3,
      user: {
        name: "Tobias Williams",
        status: "Offline"
      },
      message: "I remember everything mate. See you later!"
    },
    {
      id: 4,
      user: {
        name: "Jennifer Watkins",
        status: "Online"
      },
      message: "I will miss you, too, my dear!"
    },
    {
      id: 5,
      user: {
        name: "Steven Norton",
        status: "Online"
      },
      message: "Welcome to community!"
    }
  ];

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
