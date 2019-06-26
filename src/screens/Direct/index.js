import React from "react";
import Screen from "../../components/Screen";
import Sidebar from "../../components/Sidebar";
import MessagesList from "../../components/MessagesList";

const Direct = () => (
  <Screen horizontal>
    <Sidebar />
    <MessagesList />
  </Screen>
);

export default Direct;