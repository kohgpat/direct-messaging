import React from "react";
import { useDirect } from "../../contexts/Direct";
import { ReactComponent as BookmarkIcon } from "./images/bookmark-icon.svg";
import * as s from "./styles";

const DialoguesHeader = () => {
  const { getDialoguesFilterQuery, setDialoguesFilterQuery } = useDirect();
  const filterQuery = getDialoguesFilterQuery();

  return (
    <s.DialoguesHeader>
      <s.SearchInputBar>
        <s.SearchInputIcon />
        <s.SearchInput
          value={filterQuery}
          onChange={e => setDialoguesFilterQuery(e.target.value)}
        />
      </s.SearchInputBar>

      <s.Bookmarks>
        <s.BookmarksCount>147</s.BookmarksCount>
        <s.BookmarksIcon>
          <BookmarkIcon />
        </s.BookmarksIcon>
      </s.Bookmarks>
    </s.DialoguesHeader>
  );
};

export default DialoguesHeader;
