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

export const SendMessage = styled.div`
  margin-top: auto;
  min-height: 72px;
  max-height: 200px;
  padding: 15px 30px;
  background-color: #fff;
  box-shadow: 0px -8px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  position: relative;
`;

export const SendMessageInput = styled.textarea.attrs({ name: "message", rows: 1 })`
  min-height: 48px;
  font-size: 16px;
  background-color: #F9F8F8;
  border-radius: 24px;
  border: 1px solid #F9F8F8;
  width: 100%;
  padding: 16px 32px;
  resize: none;
`;

export const SendMessageSubmit = styled.button.attrs({ type: "submit" })`
  height: 52px;
  width: 52px;
  border-radius: 50%;
  border: 1px solid #F44A4A;
  background-color: #F44A4A;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: 32px;
`;