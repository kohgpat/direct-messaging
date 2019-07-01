import React from "react";
import * as s from "./styles";

const DialoguesHeader = () => (
  <s.DialoguesHeader>
    <s.SearchInputBar>
      <s.SearchInputIcon />
      <s.SearchInput />
    </s.SearchInputBar>

    <s.Bookmarks>
      <s.BookmarksCount>147</s.BookmarksCount>
      <s.BookmarksIcon />
    </s.Bookmarks>
  </s.DialoguesHeader>
);

export default DialoguesHeader;
