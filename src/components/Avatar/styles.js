import styled from "styled-components";

export const Avatar = styled.div`
  min-height: 50px;
  min-width: 50px;
  border-radius: 50%;
  background-color: #d0d1d4;
  position: relative;

  ${props =>
    props.size &&
    props.size === "big" &&
    `
    min-height: 160px;
    min-width: 160px;
  `}
`;

export const StatusIcon = styled.div`
  position: absolute;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border-radius: 50%;

  &::before {
    content: "";
    border-radius: 50%;
    background-color: #d1d2d5;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 4px;
    left: 4px;
  }

  ${props => props.status && props.status === 'Online' && `
    &::before {
      background-color: #3FD65F;
    }
  `}

  ${props => props.size && props.size === 'big' && `
    height: 50px;
    width: 50px;

    &::before {
      height: 20px;
      width: 20px;
      top: 15px;
      left: 15px;
    }
  `}
`;
