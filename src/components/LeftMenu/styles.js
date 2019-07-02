import styled from "styled-components";

export const LeftMenu = styled.aside`
  height: 100vh;
  width: 100px;
  background-color: #292f4c;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  margin-top: 20px;

  ${props =>
    props.bottom &&
    `
    margin-top: auto;
  `};
`;

export const NavItem = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 100%;
  position: relative;

  &:active,
  &:hover,
  &:focus {
    & > svg > path {
      opacity: 1.0;
    }
  }

  ${props =>
    props.selected &&
    `
    background-color: #292F4C;

    &::before {
      content: "";
      height: 100%;
      width: 20px;
      background-color: #F04B4E;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }

    &::after {
      content: "";
      height: 100%;
      width: 20px;
      background-color: #F04B4E;
      background: linear-gradient(270deg, #292F4C 4%, #F04242 280%);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 6px;
    }

    & > svg > path {
      opacity: 1.0;
    }
  `};
`;
