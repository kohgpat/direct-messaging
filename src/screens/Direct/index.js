import React from 'react';
import Screen from '../../components/Screen';
import LeftMenu from '../../components/LeftMenu';
import Dialogues from '../../components/Dialogues';
import Chat from '../../components/Chat';
import AboutUser from '../../components/AboutUser';
import {DirectProvider} from '../../contexts/Direct';

const currentUser = {
  id: 10,
  name: 'Bob Ross',
  status: 'Online',
};

const Direct = () => {
  return (
    <Screen horizontal>
      <DirectProvider>
        <LeftMenu currentUser={currentUser} />
        <Dialogues />
        <Chat />
        <AboutUser />
      </DirectProvider>
    </Screen>
  );
};

export default Direct;
