import styled from "styled-components";

export const SArticle = styled.article`
  padding: 2.1875rem 0px;
  border-bottom: 1px solid #eee;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  padding: 1rem;
  background-color: rgba(234, 234, 234, 0.2);
  margin-bottom: 1em;
  word-break: break-word;

  > pre {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.accent};
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
  font-size: 1.4rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;
  word-wrap: break-word;
`;

export const SPostSubheaderSpan = styled.span`
  margin: 0;
  font-weight: 300;
`;

export const SPostCreatedDiv = styled.div`
  color: ${({ theme }) => theme.subtitleColor};
  font-weight: 600;
  font-family: "Roboto", "Times New Roman", serif;
  word-wrap: break-word;
`;
