import React from "react";
import { useDirectUI } from "../../contexts/Direct/UI";
import { useDirect } from "../../contexts/Direct";
import { ReactComponent as SendIcon } from "./images/send-icon.svg";
import { ReactComponent as CallIcon } from "./images/call-icon.svg";
import { ReactComponent as VideoCallIcon } from "./images/video-call-icon.svg";
import { ReactComponent as OptionsIcon } from "./images/options-icon.svg";
import Message from "./components/Message";
import * as s from "./styles";

const Chat = () => {
  const { toggleAboutUser } = useDirectUI();
  const { getSelectedDialogue } = useDirect();
  const dialogue = getSelectedDialogue();
  const user = dialogue && dialogue.user;

  if (!dialogue) {
    return <s.Chat />;
  }

  return (
    <s.Chat dialogue={dialogue}>
      <s.Header>
        <s.HeaderUserAvatar status={user.status} />

        <s.HeaderUserInfo>
          <s.HeaderUserName onClick={toggleAboutUser}>
            {dialogue.user.name}
          </s.HeaderUserName>

          <s.HeaderUserMeta>
            <s.HeaderUserStatus>{dialogue.user.status}</s.HeaderUserStatus>
            <s.HeaderUserSeparator>·</s.HeaderUserSeparator>
            <s.HeaderUserLastSeen>
              {dialogue.user.lastSeen}
            </s.HeaderUserLastSeen>
          </s.HeaderUserMeta>
        </s.HeaderUserInfo>

        <s.HeaderUserControls>
          <s.HeaderUserControl>
            <CallIcon />
          </s.HeaderUserControl>

          <s.HeaderUserControl>
            <VideoCallIcon />
          </s.HeaderUserControl>

          <s.HeaderUserControl>
            <OptionsIcon />
          </s.HeaderUserControl>
        </s.HeaderUserControls>
      </s.Header>

      <s.Content>
        {dialogue.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </s.Content>

      <s.SendMessage>
        <s.SendMessageInput />
        <s.SendMessageSubmit>
          <SendIcon />
        </s.SendMessageSubmit>
      </s.SendMessage>
    </s.Chat>
  );
};

export default Chat;
