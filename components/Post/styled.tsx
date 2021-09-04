import styled from "styled-components";

export const SPostArticle = styled.article`
  padding: 2.1875rem 0;
  border-bottom: 1px solid #eee;

  :hover {
    cursor: default;
  }

  :last-child {
    border-bottom: 0;
  }
`;

export const SPostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25rem;
`;

export const SPostH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
`;

export const SPostSubheaderSpan = styled.span`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 300;
`;

export const SPostCreatedDiv = styled.div`
  color: #808080;
  font-style: italic;
  font-family: "Roboto", "Times New Roman", serif;
`;
