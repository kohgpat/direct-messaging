import React from 'react';
import LeftMenuCurrentUser from "../LeftMenuCurrentUser";
import * as s from "./styles";

const LeftMenu = () => (
  <s.LeftMenu>
    <LeftMenuCurrentUser />

    <s.Nav>
      <s.NavItem href="#" alt="Home">
        <s.NavItemIcon home />
      </s.NavItem>
      <s.NavItem href="#" alt="Send">
        <s.NavItemIcon send />
      </s.NavItem>
      <s.NavItem href="#" alt="Inbox" selected>
        <s.NavItemIcon inbox />
      </s.NavItem>
      <s.NavItem href="#" alt="Users">
        <s.NavItemIcon users />
      </s.NavItem>
      <s.NavItem href="#" alt="Notifications">
        <s.NavItemIcon notifications />
      </s.NavItem>
      <s.NavItem href="#" alt="Options">
        <s.NavItemIcon options />
      </s.NavItem>
    </s.Nav>

    <s.Nav bottom>
      <s.NavItem href="#" alt="Settings">
        <s.NavItemIcon settings />
      </s.NavItem>
    </s.Nav>
  </s.LeftMenu>
);

export default LeftMenu;
