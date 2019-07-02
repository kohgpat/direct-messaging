import React from "react";
import DialoguesHeader from "../DialoguesHeader";
import { useDirect } from "../../contexts/Direct";
import * as s from "./styles";

const Dialogues = () => {
  const { getDialogues, selectDialogue } = useDirect();
  const dialogues = getDialogues();

  return (
    <s.Dialogues>
      <DialoguesHeader />

      <s.List>
        {dialogues.map(item => (
          <s.Item
            key={item.id}
            selected={item.selected}
            onClick={() => selectDialogue(item)}
          >
            <s.ItemHeader>
              <s.ItemAvatar status={item.user.status} />

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
    </s.Dialogues>
  );
};

export default Dialogues;
