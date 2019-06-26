import styled from "styled-components";

export const Chat = styled.div`
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;

  ${props => !props.dialogue && `
    align-items: center;
    justify-content: center;
  `};
`;

export const Header = styled.div`
  padding: 30px;
  border-bottom: 1px solid #EFECE8;
  display: flex;
`;

export const HeaderUserAvatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-right: 15px;
`;

export const HeaderUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderUserName = styled.span`
  color: #181C2F;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 5px;
`;

export const HeaderUserStatus = styled.span`
  color: #BABBC1;
  font-weight: medium;
  font-size: 14px;
  line-height: 22px;
`;

export const Content = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;