import styled from 'styled-components';
import timelineImage from './images/timeline-image.svg';
import playIcon from './images/play-icon.svg';

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-bottom: 20px;

  ${props =>
    props.isCurrentUser &&
    `
    margin-left: auto;
    align-items: flex-end;

    ${MessageSendedAt} {
      margin-left:0;
      margin-right: 20px;
    }
  `}
`;

export const MessageContent = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 35px;
`;

export const MessagePlayButton = styled.button.attrs({type: 'button'})`
  height: 40px;
  width: 40px;
  background-color: #f14c4f;
  background-image: url(${playIcon});
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #f14c4f;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
`;

export const MessageTimeline = styled.div`
  margin-right: 15px;
  background-image: url(${timelineImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 27px;
  width: 100%;
`;

export const MessageLength = styled.span`
  color: #1a2028;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`;

export const MessageSendedAt = styled.span`
  margin-top: 3px;
  color: #b6b8ba;
  font-size: 12px;
  margin-left: 20px;
`;
