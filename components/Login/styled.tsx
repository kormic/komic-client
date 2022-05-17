import styled from "styled-components";

export const SLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  min-width: 300px;
  padding: 1.5em;
  border: 1px solid;
  border-radius: 0.5em;
`;

export const SLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SInput = styled.input`
  margin-bottom: 0.2em;
  border-radius: 0.2rem;
  padding: 0.2rem;
  outline: none;
  border: 1px solid #000;

  :focus {
    outline: none;
    border: 1px solid #000;
  }
`;

export const SSpan = styled.span`
  padding: 0.5rem 0rem;
  font-size: 0.8rem;
`;

export const SA = styled.a`
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
`;