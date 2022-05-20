import styled from "styled-components";

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SBackButton = styled.div`
  font-size: 0.8rem;
  text-align: left;
  background-color: transparent;
  color: ${({ theme }) => theme.articleColor};
  border: none;
  padding: 0.5rem 0rem;
  cursor: pointer;
`;

export const SUserFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  min-width: 300px;
  padding: 1.5em;
  border: 1px solid;
  border-radius: 0.5em;
`;

export const SUserForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SUserInput = styled.input`
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
