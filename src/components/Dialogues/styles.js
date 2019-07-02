import styled from "styled-components";
import AvatarComponent from "../Avatar";

export const Dialogues = styled.div`
  height: 100%;
  width: 450px;
  background-color: #fcfcfc;
  background: linear-gradient(
    119.19deg,
    #ffffff 0%,
    #f8f8f8 65.34%,
    #ffffff 100%
  );
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  padding: 20px 30px;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const Item = styled.div`
  padding: 25px 30px;
  background-color: #fff;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;

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
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
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

    ${ItemUserStatus} {
      color: #7F8293;
    }

    ${ItemUserName} {
      color: #fff;
    }

    ${ItemMessage} {
      color: #fff;
    }
  `};
`;

export const ItemHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ItemAvatar = styled(AvatarComponent)`
  margin-right: 15px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemUserName = styled.span`
  color: #181c2f;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 5px;
`;

export const ItemUserStatus = styled.span`
  color: #babbc1;
  font-weight: medium;
  font-size: 14px;
  line-height: 22px;
`;

export const ItemSendAt = styled.div`
  color: #babbc1;
  font-size: 16px;
  line-height: 22px;
`;

export const ItemMessage = styled.p`
  margin: 0;
  width: 80%;
  color: #181c2f;
  font-size: 14px;
  line-height: 22px;
`;
