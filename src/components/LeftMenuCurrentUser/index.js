import React from "react";
import * as s from "./styles";

const LeftMenuCurrentUser = ({ currentUser }) => (
  <s.LeftMenuCurrentUser>
    <s.Avatar status={currentUser.status} />
  </s.LeftMenuCurrentUser>
);

export default LeftMenuCurrentUser;
