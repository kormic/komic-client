import styled, { useTheme } from "styled-components";

export const SNewPostWrapper = styled.section`
  width: 80%;
  margin: auto;
  padding: 1em 0;
`;

export const SNewPostMetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;

  > * > * {
    font-size: 1.2rem;
  }
`;

export const SNewPostTitleWrapper = styled.div`
  flex: 1 0 60%;
  display: flex;
  gap: 0.3em;
  align-items: center;
`;

export const SNewPostCategoryWrapper = styled.div`
  flex: 0 1 40%;
  text-align: right;
`;

export const SNewPostTitleTextarea = styled.textarea`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.accent};
  outline: none;
  font-weight: bold;
  flex: 1;
  resize: none;
  line-height: 1em;

  ::placeholder {
    color: ${({ theme }) => theme.bodyColor};
    opacity: 1; /* Firefox */
  }
`;

export const SNewPostCategorylabel = styled.label<{ active: boolean }>`
  font-size: 0.8rem;
  padding: 0.2rem;
  border: 1px solid ${({ active, theme }) => (active ? theme.accent : "#fff")};
  border-radius: 0.25rem;
  margin-right: 0.4em;
  width: 90px;
  display: inline-block;
  text-align: center;
  text-overflow: ellipsis;
  overflow: clip;
  color: ${({ active, theme }) => (active ? theme.accent : "#fff")};

  :hover {
    cursor: pointer;
  }
`;

export const SNewPostCategoryCheckbox = styled.input`
  display: none;
`;
