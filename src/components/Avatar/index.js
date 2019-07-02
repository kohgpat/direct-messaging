import React from "react";
import * as s from "./styles";

const Avatar = ({ avatarUrl, status, size, className }) => (
  <s.Avatar url={avatarUrl} status={status} size={size} className={className} />
);

export default Avatar;
