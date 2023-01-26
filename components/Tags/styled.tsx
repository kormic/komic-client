import styled from "styled-components";

export const STagsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: 5px;
  background-color: rgba(234, 234, 234, 0.2);
  border-radius: 0.25rem;
`;

export const STagSpan = styled.span`
  color: ${({ theme }) => theme.accent};
  padding: 0.25rem;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
`;
