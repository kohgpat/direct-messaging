import styled from "styled-components";

export const DialoguesHeader = styled.div`
  padding: 30px;
`;

export const SearchInput = styled.input.attrs({ type: "search", name: "q" })`
  height: 48px;
  font-size: 16px;
  background-color: #F9F8F8;
  border-radius: 24px;
  border: 1px solid #F9F8F8;
  width: 300px;
  padding: 16px 32px;
`;