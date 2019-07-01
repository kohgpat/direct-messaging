import styled from "styled-components";
import searchIcon from "./images/search-icon.svg";

export const DialoguesHeader = styled.div`
  padding: 30px;
`;

export const SearchInputBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  background-color: #f9f8f8;
  border-radius: 24px;
  border: 1px solid #f9f8f8;
  width: 300px;
  padding: 16px 32px 16px 50px;

  &::placeholder {
    color: #B6B7BC;
  }
`;
