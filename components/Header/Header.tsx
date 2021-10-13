import Link from "next/link";
import React from "react";
import { useTheme } from "styled-components";

import { useCategories } from "context/CategoriesContext";
import { useThemeContext } from "context/ThemeContext";
import Menu from "./Menu";
import {
  SNav,
  SBrandLogoWrapper,
  SBrandLogoImage,
  SHamburgerMenuWrapper,
  SHamburgerIcon,
  SMenuWrapper,
  SMenuWrapperMobile,
  SNavRow,
  SHelloMessage,
  SSunIcon,
  SThemeToggleWrapper,
} from "./styled";
import { endpoints } from "adapters/endpoints";
import owlImage from "../../public/owl-logo-dark.png";

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const defaultTheme = useTheme();
  const { categories } = useCategories();
  const [showBrandLogo, setShowBrandLogo] = React.useState(true);

  const toggleMenu = () => setShowBrandLogo((prev) => !prev);

  return (
    <header>
      <SNav>
        <SNavRow>
          <Link href={endpoints.POSTS.URL} passHref shallow={true}>
            <SHelloMessage>{">"} helllo</SHelloMessage>
          </Link>
          {showBrandLogo && (
            <Link href={endpoints.POSTS.URL} passHref shallow={true}>
              <SBrandLogoWrapper>
                <SBrandLogoImage src={owlImage} alt='Komic Logo' />
              </SBrandLogoWrapper>
            </Link>
          )}
          <SThemeToggleWrapper>
            <SSunIcon
              onClick={toggleTheme}
              xmlns='http://www.w3.org/2000/svg'
              fill={theme === "dark" ? defaultTheme.accent : "none"}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </SSunIcon>
          </SThemeToggleWrapper>
          <SHamburgerMenuWrapper onClick={toggleMenu}>
            <SHamburgerIcon
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </SHamburgerIcon>
          </SHamburgerMenuWrapper>
          <SMenuWrapper>
            <Menu categories={categories} />
          </SMenuWrapper>
        </SNavRow>
        {!showBrandLogo && (
          <SMenuWrapperMobile>
            <Menu isMobile categories={categories} />
          </SMenuWrapperMobile>
        )}
      </SNav>
    </header>
  );
};

export default Header;
