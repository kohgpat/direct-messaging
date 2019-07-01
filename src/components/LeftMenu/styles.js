import styled from "styled-components";
import homeIcon from "./images/home-icon.svg";
import sendIcon from "./images/send-icon.svg";
import inboxIcon from "./images/inbox-icon.svg";
import usersIcon from "./images/users-icon.svg";
import notificationsIcon from "./images/notifications-icon.svg";
import optionsIcon from "./images/options-icon.svg";

export const LeftMenu = styled.aside`
  height: 100vh;
  width: 100px;
  background-color: #292F4C;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  margin-top: 60px;

  ${props => props.bottom && `
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
`;

export const NavItemIcon = styled.div`
  background-color: transparent;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${props => props.home && `
    background-image: url(${homeIcon});
    height: 24px;
    width: 24px;
  `};

  ${props => props.send && `
    background-image: url(${sendIcon});
    height: 24px;
    width: 26px;
  `};

  ${props => props.inbox && `
    background-image: url(${inboxIcon});
    height: 20px;
    width: 24px;
  `};

  ${props => props.users && `
    background-image: url(${usersIcon});
    height: 24px;
    width: 26px;
  `};

  ${props => props.notifications && `
    background-image: url(${notificationsIcon});
    height: 27px;
    width: 24px;
  `};

  ${props => props.options && `
    background-image: url(${optionsIcon});
    height: 6px;
    width: 26px;
  `};
`;