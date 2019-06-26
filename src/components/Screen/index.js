import React from 'react';
import * as s from "./styles";

const Screen = ({ children, ...restProps }) => (
  <s.Screen {...restProps}>{ children }</s.Screen>
);

export default Screen;