import React from "react";
import Screen from "../../components/Screen";
import Sidebar from "../../components/Sidebar";
import MessagesList from "../../components/MessagesList";
import Chat from "../../components/Chat";

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

const Direct = () => (
  <Screen horizontal>
    <Sidebar />
    <MessagesList messages={messages} />
    <Chat message={messages[0]} />
  </Screen>
);

export default Direct;