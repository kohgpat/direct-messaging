import styled from 'styled-components';
import AvatarComponent from '../Avatar';

export const Chat = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #efece8;

  ${props =>
    !props.dialogue &&
    `
    align-items: center;
    justify-content: center;
  `};
`;

export const Header = styled.div`
  padding: 30px;
  border-bottom: 1px solid #efece8;
  display: flex;
  align-items: center;
`;

export const HeaderUserAvatar = styled(AvatarComponent)`
  margin-right: 15px;
`;

export const HeaderUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderUserName = styled.span`
  color: #181c2f;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const HeaderUserMeta = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderUserStatus = styled.span`
  color: #babbc1;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const HeaderUserSeparator = styled.div`
  margin: 0 8px;
  color: #a3a4ac;
  font-size: 14px;
  line-height: 22px;
`;

export const HeaderUserLastSeen = styled.span`
  color: #babbc1;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Content = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  overflow-y: auto;
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
`;

export const SendMessageInput = styled.textarea.attrs({
  name: 'message',
  rows: 1,
})`
  min-height: 48px;
  font-size: 16px;
  background-color: #f9f8f8;
  border-radius: 24px;
  border: 1px solid #f9f8f8;
  padding: 16px 32px;
  resize: none;
  outline: none;
  flex: 1;

  &:active,
  &:focus {
    border: 1px solid #efece8;
  }
`;

export const SendMessageSubmit = styled.button.attrs({type: 'submit'})`
  height: 52px;
  width: 52px;
  border-radius: 50%;
  border: 1px solid #f44a4a;
  background-color: #f44a4a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: 16px;
`;

export const HeaderUserControls = styled.div`
  display: flex;
  margin-left: auto;
`;

export const HeaderUserControl = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    & > svg > path {
      opacity: 1;
    }

    & > svg > g {
      opacity: 1;
    }
  }

  &:not(:last-child) {
    margin-right: 22px;
  }
`;
