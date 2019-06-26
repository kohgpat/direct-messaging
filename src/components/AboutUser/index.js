import React from "react";
import * as s from "./styles";

const AboutUser = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <s.AboutUser>
      <s.Controls>
        <s.ControlClose />
      </s.Controls>

      <s.UserInfo noPaddingTop center>
        <s.UserAvatar />
        <s.UserName>{user.name}</s.UserName>
        <s.UserLocation>{user.location}</s.UserLocation>
        <s.UserDescription>{user.description}</s.UserDescription>
      </s.UserInfo>

      <s.UserInfo bordered>
        {user.contacts.phone && (
          <s.UserInfoRow>
            <s.UserInfoColumn>Phone:</s.UserInfoColumn>
            <s.UserInfoValue>{user.contacts.phone}</s.UserInfoValue>
          </s.UserInfoRow>
        )}

        {user.contacts.email && (
          <s.UserInfoRow>
            <s.UserInfoColumn>Email:</s.UserInfoColumn>
            <s.UserInfoValue>{user.contacts.email}</s.UserInfoValue>
          </s.UserInfoRow>
        )}

        {user.dob && (
          <s.UserInfoRow>
            <s.UserInfoColumn>DOB:</s.UserInfoColumn>
            <s.UserInfoValue>{user.dob}</s.UserInfoValue>
          </s.UserInfoRow>
        )}
      </s.UserInfo>

      <s.UserInfo bordered>
        <s.UserMedia>
          <s.UserMediaHeader>
            <s.UserMediaHeaderCount>Media (31)</s.UserMediaHeaderCount>
            <s.UserMediaHeaderLinkAll>See All ></s.UserMediaHeaderLinkAll>
          </s.UserMediaHeader>

          <s.UserMediaImages />
        </s.UserMedia>
      </s.UserInfo>
    </s.AboutUser>
  );
};

export default AboutUser;
