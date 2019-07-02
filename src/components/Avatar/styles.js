import styled from "styled-components";

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #d0d1d4;

  ${props =>
    props.size &&
    props.size === "big" &&
    `
    height: 160px;
    width: 160px;
  `}
`;
