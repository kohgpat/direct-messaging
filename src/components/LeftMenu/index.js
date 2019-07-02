import React from "react";
import LeftMenuCurrentUser from "../LeftMenuCurrentUser";
import { ReactComponent as HomeIcon } from "./images/home-icon.svg";
import { ReactComponent as SendIcon } from "./images/send-icon.svg";
import { ReactComponent as InboxIcon } from "./images/inbox-icon.svg";
import { ReactComponent as UsersIcon } from "./images/users-icon.svg";
import { ReactComponent as NotificationsIcon } from "./images/notifications-icon.svg";
import { ReactComponent as OptionsIcon } from "./images/options-icon.svg";
import { ReactComponent as SettingsIcon } from "./images/settings-icon.svg";
import * as s from "./styles";

const LeftMenu = ({ currentUser }) => (
  <s.LeftMenu>
    <LeftMenuCurrentUser currentUser={currentUser} />

    <s.Nav>
      <s.NavItem href="#" alt="Home">
        <HomeIcon />
      </s.NavItem>
      <s.NavItem href="#" alt="Send">
        <SendIcon />
      </s.NavItem>
      <s.NavItem href="#" alt="Inbox" selected>
        <InboxIcon />
      </s.NavItem>
      <s.NavItem href="#" alt="Users">
        <UsersIcon />
      </s.NavItem>
      <s.NavItem href="#" alt="Notifications">
        <NotificationsIcon />
      </s.NavItem>
      <s.NavItem href="#" alt="Options">
        <OptionsIcon />
      </s.NavItem>
    </s.Nav>

    <s.Nav bottom>
      <s.NavItem href="#" alt="Settings">
        <SettingsIcon />
      </s.NavItem>
    </s.Nav>
  </s.LeftMenu>
);

export default LeftMenu;
