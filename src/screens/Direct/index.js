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
    message: "Analysis of foreign experience, as it is common",
    messages: []
  },
  {
    id: 2,
    user: {
      name: "Anna Dormun",
      status: "Offline"
    },
    message: "It seems logical that the strategy of providing!",
    messages: []
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
    message: "I remember everything mate. See you later!",
    messages: [
      {
        id: 1,
        user: {
          id: 3,
          name: "Tobias Williams"
        },
        sendedAt: "Yesterday 14:26 PM",
        message: "Hi Alex! What's up?"
      },
      {
        id: 2,
        user: {
          id: 10,
          name: "Bob Ross"
        },
        sendedAt: "Yesterday 14:38 PM",
        message:
          "Oh, hello! All perfectly. I work, study and know this wonderful world!"
      },
      {
        id: 3,
        user: {
          id: 3,
          name: "Tobias Williams"
        },
        sendedAt: "Yesterday 19:26 PM",
        message: null,
        audio: true
      },
      {
        id: 4,
        user: {
          id: 10,
          name: "Bob Ross"
        },
        sendedAt: "Today 06:18 PM",
        message: "I remember everything mate. See you later!"
      },
      {
        id: 5,
        user: {
          id: 3,
          name: "Tobias Williams"
        },
        sendedAt: "Yesterday 14:26 PM",
        message: "Hi Alex! What's up?"
      },
      {
        id: 6,
        user: {
          id: 10,
          name: "Bob Ross"
        },
        sendedAt: "Yesterday 14:38 PM",
        message:
          "Oh, hello! All perfectly. I work, study and know this wonderful world!"
      },
    ]
  },
  {
    id: 4,
    user: {
      name: "Jennifer Watkins",
      status: "Online"
    },
    message: "I will miss you, too, my dear!",
    messages: []
  },
  {
    id: 5,
    user: {
      name: "Steven Norton",
      status: "Online"
    },
    message: "Welcome to community!",
    messages: []
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
