import styled from "styled-components";

export const Sidebar = styled.aside`
  height: 100vh;
  width: 100px;
  background-color: #292F4C;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Nav = styled.nav`
  margin-top: 60px;

  ${props => props.bottom && `
    margin-top: auto;
  `};
`;