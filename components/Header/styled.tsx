import Image from "next/image";
import styled from "styled-components";

export const SHeader = styled.header`
  flex: 0 0 6.5em;
`;

export const SNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const SNavRow = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.41rem 0.9375rem;
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
  // background-color: ${({ theme }) => theme.accent};
  // border-radius: 9999px;
  width: 100%;
  height: auto;
`;

export const SBrandLogoBgFix = styled.div`
  position: absolute;
  top: 5px;
  background-color: lightgray;
  width: 98%;
  height: 65%;
  z-index: -1;
`;

export const SNavList = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }
`;

export const SNavListItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;

  > a {
    ${({ theme, active }) => active && `color: ${theme.accent};`};

    :hover {
      color: ${({ theme, active }) => !active && theme.subtitleColor};
    }
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
  margin-left: 4px;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.accent};
  font-style: italic;
  font-weight: 300;
  white-space: nowrap;
`;

export const SSpecialButton = styled.button<{
  backgroundColor?: string;
  color?: string;
}>`
  display: block;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  ${({ color }) => color && `color: ${color};`};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.specialButtonColor};

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

export const SSeparator = styled.div<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? "1px;" : "1em;")}
  border: ${({ theme }) => `1px solid ${theme.bodyColor}`};
  opacity: 0.7;
`;
