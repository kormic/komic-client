import Image from 'next/image';
import styled from 'styled-components';

export const SNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.75rem;
  height: 3rem;
`;

export const SNavRow = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.41rem 0.9375rem;
  background-color: #eaeaea;
`;

export const SBrandLogoWrapper = styled.div`
  position: absolute;
  width: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(33%);

  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const SBrandLogoImage = styled(Image)`
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
    color: rgba(251, 191, 36, 1);
  }
`;

export const SMenuWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SMenuWrapperMobile = styled.div`
  background-color: rgba(243, 244, 246, 1);
  border-radius: 0.5rem;
  padding-left: 0.9375rem;
  position: absolute;
  width: 100%;
  top: 3rem;

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
    background-color: rgba(251, 191, 36, 1);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SHamburgerIcon = styled.svg`
  height: 1rem;
  width: 1rem;
`;

export const SHintSpan = styled.span`
  font-size: 0.75rem;
  color: rgb(251, 191, 36);
  font-style: italic;
  font-weight: 300;
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
    background-color: rgba(251, 191, 36, 1);
  }
`;
