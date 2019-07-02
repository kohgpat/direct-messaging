import React from "react";
import Screen from "../../components/Screen";
import LeftMenu from "../../components/LeftMenu";
import Dialogues from "../../components/Dialogues";
import Chat from "../../components/Chat";
import AboutUser from "../../components/AboutUser";
import { DirectUIProvider } from "../../contexts/Direct/UI";
import { DirectProvider } from "../../contexts/Direct";

const currentUser = {
  id: 10,
  name: "Bob Ross",
  status: "Online"
};

const Direct = () => {
  return (
    <Screen horizontal>
      <DirectProvider>
        <DirectUIProvider>
          <LeftMenu currentUser={currentUser} />
          <Dialogues />
          <Chat />
          <AboutUser />
        </DirectUIProvider>
      </DirectProvider>
    </Screen>
  );
};

export default Direct;
