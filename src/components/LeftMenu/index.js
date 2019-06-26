import React from 'react';
import LeftMenuCurrentUser from "../LeftMenuCurrentUser";
import * as s from "./styles";

const LeftMenu = () => (
  <s.LeftMenu>
    <LeftMenuCurrentUser />

    <s.Nav>Nav</s.Nav>

    <s.Nav bottom>S</s.Nav>
  </s.LeftMenu>
);

export default LeftMenu;