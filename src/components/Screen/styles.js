import styled from "styled-components";

export const Screen = styled.div`
  height: 100vh;
  width: 100vw;

  ${props => props.horizontal && `
    display: flex;
  `};
`;