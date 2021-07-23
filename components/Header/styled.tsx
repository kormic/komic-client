import Image from "next/image";
import styled from "styled-components";

export const SNav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.41rem 0.9375rem;
  background-color: #eaeaea;
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const SImageWrapper = styled.div`
  position: absolute;
  width: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(33%);

  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const SImage = styled(Image)`
  border-radius: 9999px;
`;

export const SUl = styled.ul`
  display: flex;
  gap: 0.4rem;
  list-style: none;
`;

export const SMenuWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    gap: 0.4rem;
  }
`;

export const SHamburgerMenuWrapper = styled.button`
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  color: gray;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SHamburgerIcon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;
