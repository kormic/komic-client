import styled from "styled-components";

export const SMainTitleSection = styled.section`
  margin: 0;
  text-align: center;
`;

export const SMainTitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) {
    word-spacing: 0.4rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const SMainTitleHr = styled.hr`
  max-width: 6.25rem;
  margin: 1rem auto;
  border-width: 0.25rem;
  border-radius: 0.1875rem;
  border: 0;
  border-top: 5px solid rgb(251, 191, 36);
`;

export const SMainTitleSubHeadSpan = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
  text-transform: capitalize;
`;
