import styled from "styled-components";
import AvatarComponent from "../Avatar";
import closeIcon from "./images/close-icon.svg";

export const AboutUser = styled.div`
  height: 100%;
  width: 310px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #efece8;
  flex-shrink: 0;
  overflow-y: auto;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 30px 30px 0;
`;

export const ControlClose = styled.button.attrs({ type: "button" })`
  height: 20px;
  width: 20px;
  background-color: transparent;
  background-image: url(${closeIcon});
  border: 0;
  margin-left: auto;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 30px;

  ${props =>
    props.noPaddingTop &&
    `
    padding-top: 0;
  `}

  ${props =>
    props.bordered &&
    `
    border-top: 1px solid #EFECE8;
  `}

  ${props =>
    props.center &&
    `
    align-items: center;
  `}
`;

export const UserAvatar = styled(AvatarComponent)``;

export const UserName = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 22px;
  color: #181c2f;
  text-align: center;
  margin-top: 25px;
`;

export const UserLocation = styled.span`
  font-size: 16px;
  color: #a1a3ab;
  margin-top: 10px;
  text-align: center;
`;

export const UserDescription = styled.p`
  font-size: 14px;
  color: #181c2f;
  margin: 20px 0 0;
  text-align: center;
`;

export const UserInfoRow = styled.dl`
  display: flex;
  align-items: center;
  margin: 0;

  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export const UserInfoColumn = styled.dt`
  font-weight: bold;
  font-size: 14px;
  color: #a1a3aa;
`;

export const UserInfoValue = styled.dd`
  font-size: 14px;
  color: #181c2f;
`;

export const UserMedia = styled.div``;

export const UserMediaHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMediaHeaderCount = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #a1a3aa;
`;

export const UserMediaHeaderLinkAll = styled.a`
  font-size: 14px;
  color: #F44A4A;
  cursor: pointer;
`;

export const UserMediaImages = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 11px;
  grid-gap: 11px;
  grid-template-columns: 76px 76px 76px;
`;

export const UserMediaImage = styled.div`
  width: 76px;
  height: 76px;
  background-color: #f1f1f1;
  cursor: pointer;
`;
