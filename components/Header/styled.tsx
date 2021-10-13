import Image from "next/image";
import styled from "styled-components";

export const SNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.75rem;
  height: 6.5rem;
`;

export const SNavRow = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.41rem 0.9375rem;
  background-color: ${({ theme }) => theme.headerBg};
`;

export const SBrandLogoWrapper = styled.div`
  position: absolute;
  width: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(33%);

  :hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const SBrandLogoImage = styled(Image)`
  background-color: ${({ theme }) => theme.accent};
  border-radius: 9999px;
`;

export const SNavList = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }
`;

export const SNavListItem = styled.li`
  cursor: pointer;
  font-size: 1rem;

  :hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const SThemeToggleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  :hover {
    cursor: pointer;
  }
`;

export const SMenuWrapper = styled.div`
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const SMenuWrapperMobile = styled.div`
  background-color: ${({ theme }) => theme.headerBg};
  border-radius: 0.5rem;
  padding-left: 0.9375rem;
  position: absolute;
  width: 98%;
  left: 1%;
  top: 3.2rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SHamburgerMenuWrapper = styled.button`
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: rgba(252, 211, 77, 1);

  :hover {
    background-color: ${({ theme }) => theme.accent};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SHamburgerIcon = styled.svg`
  height: 1rem;
  width: 1rem;
`;

export const SSunIcon = styled.svg`
  height: 30px;
  width: 40px;

  :hover {
    fill: ${({ theme }) => theme.accent};
  }
`;

export const SHintSpan = styled.span`
  font-size: 0.75rem;
  color: rgb(251, 191, 36);
  font-style: italic;
  font-weight: 300;
  white-space: nowrap;
`;

export const SSpecialButton = styled.button`
  display: block;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.25rem;
  font-size: 1rem;
  background-color: rgba(252, 211, 77, 1);

  :hover {
    background-color: ${({ theme }) => theme.accent};
  }
`;

export const SHelloMessage = styled.div`
  position: relative;

  :hover {
    cursor: pointer;
  }

  :after {
    position: absolute;
    top: 6px;
    right: -15px;
    content: "";
    display: inline-block;
    width: 12px;
    height: 21px;
    background-color: ${({ theme }) => theme.accent};
    animation: blink 1s linear infinite alternate;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
