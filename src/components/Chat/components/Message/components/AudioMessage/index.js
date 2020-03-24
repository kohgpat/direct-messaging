import React from 'react';
import * as s from './styles';

const AudioMessage = ({message}) => {
  const isCurrentUser = message.user.id === 10;

  return (
    <s.Message isCurrentUser={isCurrentUser}>
      <s.MessageContent>
        <s.MessagePlayButton />
        <s.MessageTimeline />
        <s.MessageLength>{message.length}</s.MessageLength>
      </s.MessageContent>
      <s.MessageSendedAt>{message.sendedAt}</s.MessageSendedAt>
    </s.Message>
  );
};

export default AudioMessage;
