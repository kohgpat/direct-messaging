const initialState = {
  ui: {
    dialogues: {
      filter: {
        query: '',
      },
    },
    aboutUser: {
      show: true,
    },
  },
  dialogues: [
    {
      id: 1,
      user: {
        name: 'Donald Johnson',
        status: 'Online',
        location: 'Berlin, Germany',
        description: 'Front-end developer',
        socialNetworks: [],
        contacts: {
          phone: '+(33 1) 45 55 01 11',
          email: 'donald@front-end.im',
        },
        dob: '10.04.1993',
        lastSeen: 'Last seen 2 hours ago',
      },
      selected: false,
      message: 'Analysis of foreign experience, as it is common',
      messages: [],
    },
    {
      id: 2,
      user: {
        name: 'Anna Dormun',
        status: 'Offline',
        location: 'Tokyo, Japan',
        description: 'Designer',
        socialNetworks: [],
        contacts: {
          phone: '+(33 1) 45 55 01 12',
          email: 'designer@design.im',
        },
        dob: '11.02.1990',
        lastSeen: 'Last seen 1 hours ago',
      },
      selected: false,
      message: 'It seems logical that the strategy of providing!',
      messages: [],
    },
    {
      id: 3,
      user: {
        name: 'Tobias Williams',
        status: 'Online',
        location: 'Paris, France',
        description:
          'Help people to build websites and apps + grow awareness in social media 🔥',
        socialNetworks: [],
        contacts: {
          phone: '+(33 1) 45 55 01 10',
          email: 'info@uxdesigner.im',
        },
        dob: '14.05.1992',
        lastSeen: 'Last seen recently',
      },
      selected: true,
      message: 'I remember everything mate. See you later!',
      messages: [
        {
          id: 1,
          user: {
            id: 3,
            name: 'Tobias Williams',
          },
          sendedAt: 'Yesterday 14:26 PM',
          message: "Hi Alex! What's up?",
          type: 'text',
          length: null,
        },
        {
          id: 2,
          user: {
            id: 10,
            name: 'Bob Ross',
          },
          sendedAt: 'Yesterday 14:38 PM',
          message:
            'Oh, hello! All perfectly. I work, study and know this wonderful world!',
          type: 'text',
          length: null,
        },
        {
          id: 3,
          user: {
            id: 3,
            name: 'Tobias Williams',
          },
          sendedAt: 'Yesterday 19:26 PM',
          message: null,
          length: '01:24',
          type: 'audio',
        },
        {
          id: 4,
          user: {
            id: 10,
            name: 'Bob Ross',
          },
          sendedAt: 'Today 06:18 PM',
          message: 'I remember everything mate. See you later!',
          type: 'text',
          length: null,
        },
        {
          id: 5,
          user: {
            id: 3,
            name: 'Tobias Williams',
          },
          sendedAt: 'Yesterday 14:26 PM',
          message: "Hi Alex! What's up?",
          type: 'text',
          length: null,
        },
        {
          id: 6,
          user: {
            id: 10,
            name: 'Bob Ross',
          },
          sendedAt: 'Yesterday 14:38 PM',
          message:
            'Oh, hello! All perfectly. I work, study and know this wonderful world!',
          type: 'text',
          length: null,
        },
      ],
    },
    {
      id: 4,
      user: {
        name: 'Jennifer Watkins',
        status: 'Online',
        location: 'Beijing, China',
        description: 'Designer',
        socialNetworks: [],
        contacts: {
          phone: '+(33 1) 45 55 01 12',
          email: 'designer@design.im',
        },
        dob: '11.02.1990',
        lastSeen: 'Last seen 1 hours ago',
      },
      message: 'I will miss you, too, my dear!',
      messages: [],
    },
    {
      id: 5,
      user: {
        name: 'Steven Norton',
        status: 'Online',
        location: 'London, UK',
        description: 'Designer',
        socialNetworks: [],
        contacts: {
          phone: '+(33 1) 45 55 01 12',
          email: 'designer@design.im',
        },
        dob: '11.02.1990',
        lastSeen: 'Last seen 1 hours ago',
      },
      message: 'Welcome to community!',
      messages: [],
    },
  ],
};

export default initialState;
