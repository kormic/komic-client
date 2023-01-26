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

export const SPostTagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
