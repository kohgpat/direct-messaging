import React from 'react';
import SidebarCurrentUser from "../SidebarCurrentUser";
import * as s from "./styles";

const Sidebar = () => (
  <s.Sidebar>
    <SidebarCurrentUser />

    <s.Nav>Nav</s.Nav>

    <s.Nav bottom>S</s.Nav>
  </s.Sidebar>
);

export default Sidebar;