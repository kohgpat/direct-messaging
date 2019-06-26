import React from "react";
import Screen from "../../components/Screen";
import LeftMenu from "../../components/LeftMenu";
import Dialogues from "../../components/Dialogues";
import Chat from "../../components/Chat";
import AboutUser from "../../components/AboutUser";

const dialogues = [
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
      status: "Offline",
      location: "Paris, France",
      description:
        "Help people to build websites and apps + grow awareness in social media 🔥",
      socialNetworks: [],
      contacts: {
        phone: "+(33 1) 45 55 01 10",
        email: "info@uxdesigner.im"
      },
      dob: "14.05.1992"
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
    <LeftMenu />
    <Dialogues dialogues={dialogues} />
    <Chat dialogue={dialogues[2]} />
    <AboutUser user={dialogues[2].user} />
  </Screen>
);

export default Direct;
