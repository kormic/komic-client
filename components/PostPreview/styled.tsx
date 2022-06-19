import styled from "styled-components";

import { SArticle } from "components/Post/styled";

export const SA = styled.a`
  :hover {
    cursor: pointer;
  }

  > ${SArticle} {
    cursor: pointer !important;
  }

  :hover h1 {
    color: ${({ theme }) => theme.accent};
  }
`;

export const SPostPreviewBottomWrapper = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    font-size: 0.9rem;
  }
`;

export const STagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const STagSpan = styled.span`
  color: ${({ theme }) => theme.accent};
  padding: 0.25rem;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 0.375rem;
  background-color: whitesmoke;
  font-size: 0.75rem;
`;

// NOTE: Eveything from this line and one is
// probably deprecated
export const STagLabelWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 0.1rem;
  }
`;

export const SReadMoreSpan = styled.span`
  display: inline-block;
  font-weight: 500;
  flex: 1;
  text-align: right; ;
`;

export const SPostPreviewMainwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SPostPreviewP = styled.p`
  margin-bottom: 0.7rem;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.articleColor};
  line-height: 1.2rem;
  text-align: justify;
`;
