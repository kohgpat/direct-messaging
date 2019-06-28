import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-bottom: 20px;

  ${props =>
    props.currentUser &&
    `
    margin-left: auto;
    align-items: flex-end;

    ${MessageText} {
      background-color: #F14C4F;
      color: #fff;
    }

    ${MessageSendedAt} {
      margin-left:0;
      margin-right: 20px;
    }
  `}
`;

export const MessageText = styled.span`
  margin: 0;
  padding: 15px 25px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 35px;
`;

export const MessageSendedAt = styled.span`
  margin-top: 3px;
  color: #b6b8ba;
  font-size: 12px;
  margin-left: 20px;
`;