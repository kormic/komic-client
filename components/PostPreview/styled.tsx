import styled from 'styled-components';

export const SPostPreviewBottomWrapper = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    font-size: 0.9rem;
  }
`;

export const STagLabelWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 0.1rem;
  }
`;

export const STagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const STagSpan = styled.span`
  color: rgba(251, 191, 36, 0.6);
`;

export const SReadMoreLink = styled.a`
  display: inline-block;
  font-weight: 500;
  flex: 1;
  text-align: right; ;
`;

export const SPostPreviewArticle = styled.article`
  padding: 2.1875rem 0;
  border-bottom: 1px solid #eee;

  :hover {
    cursor: pointer;
  }

  :hover h1,
  :hover a {
    color: rgba(251, 191, 36, 1);
  }

  :last-child {
    border-bottom: 0;
  }
`;

export const SPostPreviewTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25rem;
`;

export const SPostPreviewH1 = styled.h1`
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
  font-family: 'Roboto', 'Times New Roman', serif;
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
  color: #5a5a5a;
  line-height: 1.2rem;
  text-align: justify;
`;
