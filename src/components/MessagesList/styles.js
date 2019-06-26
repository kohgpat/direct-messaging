import styled from "styled-components";

export const MessagesList = styled.div`
  height: 100%;
  width: 450px;
  background-color: #FCFCFC;
  background: linear-gradient(119.19deg, #FFFFFF 0%, #F8F8F8 65.34%, #FFFFFF 100%);
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
`;

export const ItemHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ItemAvatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #D0D1D4;
  margin-right: 15px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemUserName = styled.span`
  color: #181C2F;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 5px;
`;

export const ItemUserStatus = styled.span`
  color: #BABBC1;
  font-weight: medium;
  font-size: 14px;
  line-height: 22px;
`;

export const ItemSendAt = styled.div`
  color: #BABBC1;
  font-size: 16px;
  line-height: 22px;
`;

export const ItemMessage = styled.p`
  margin: 0;
  width: 80%;
  color: #181C2F;
  font-size: 16px;
  line-height: 22px;
`;