import React from "react";
import * as s from "./styles";

const Avatar = ({ avatarUrl, status, size, className }) => (
  <s.Avatar url={avatarUrl} status={status} size={size} className={className}>
    <s.StatusIcon status={status} size={size} />
  </s.Avatar>
);

export default Avatar;
