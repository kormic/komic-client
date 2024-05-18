import styled from "styled-components";

export const SFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 12rem;
  justify-content: center;
`;

export const SFooterRowWrapper = styled.div<{
  marginY?: string;
}>`
  display: flex;
  font-size: 0.7rem;
  gap: 1rem;
  ${({ marginY }) => `margin: ${marginY ?? "1rem"} 0;`}
`;

export const SFooterMadeWithLoveWrapper = styled.div`
  padding: 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.bodyBg};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 4px;
`;

export const SSocialIcon = styled.svg`
  width: 24px;

  :hover {
    color: ${({ theme }) => theme.accent};
    cursor: pointer;
  }
`;
