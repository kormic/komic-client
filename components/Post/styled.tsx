import styled from "styled-components";

export const SArticle = styled.article`
  padding: 2.1875rem 0px;
  border-bottom: 1px solid #eee;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  padding: 2rem;
  background-color: #eaeaea66;
  margin-bottom: 3rem;
  word-break: break-word;

  > pre {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: rgb(251, 191, 36);
    overflow: auto;
  }

  img {
    width: 100%;
  }

  :hover {
    cursor: default;
  }

  :last-child {
    border-bottom: 0;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
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
  text-transform: capitalize;
  word-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const SPostSubheaderSpan = styled.span`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const SPostCreatedDiv = styled.div`
  color: ${({ theme }) => theme.subtitleColor};
  font-style: italic;
  font-family: "Roboto", "Times New Roman", serif;
  word-wrap: break-word;
`;
