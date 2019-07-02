import styled from "styled-components";
import searchIcon from "./images/search-icon.svg";

export const DialoguesHeader = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const SearchInputBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
`;

export const SearchInputIcon = styled.div`
  height: 18px;
  width: 18px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 20px;
`;

export const SearchInput = styled.input.attrs({
  type: "search",
  name: "q",
  placeholder: "Enter for search…"
})`
  -webkit-appearance: none;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  background-color: #f9f8f8;
  border-radius: 24px;
  border: 1px solid #f9f8f8;
  max-width: 300px;
  padding: 16px 32px 16px 50px;

  &::placeholder {
    color: #b6b7bc;
  }
`;

export const Bookmarks = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const BookmarksCount = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #d0d1d7;
`;

export const BookmarksIcon = styled.button.attrs({ type: "button" })`
  margin-left: 10px;
  height: 26px;
  width: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    & > svg > path {
      opacity: 1;
    }
  }
`;
