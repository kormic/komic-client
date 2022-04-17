import styled from "styled-components";

export const SEmptyPostsWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  border: ${({ theme }) => `1px solid ${theme.articleColor}`};
  border-radius: 1rem;
  width: 95%;
  margin-left: 2.5%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    border: ${({ theme }) => `1px solid ${theme.articleColor}`};
    width: 70%;
    margin-left: 15%;
  }
`;
