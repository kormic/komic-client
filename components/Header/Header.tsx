import Link from "next/link";
import React from "react";

import { useCategories } from "context/CategoriesContext";
import owlImage from "../../public/owl-logo-dark.png";
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
} from "./styled";

const Header = () => {
  const { categories } = useCategories();
  const [showBrandLogo, setShowBrandLogo] = React.useState(true);

  const toggleMenu = () => setShowBrandLogo((prev) => !prev);

  return (
    <header>
      <SNav>
        <SNavRow>
          <Link href='/' passHref shallow={true}>
            <SHelloMessage>{">"} helllo</SHelloMessage>
          </Link>
          {showBrandLogo && (
            <Link href='/' passHref shallow={true}>
              <SBrandLogoWrapper>
                <SBrandLogoImage src={owlImage} alt='Komic Logo' />
              </SBrandLogoWrapper>
            </Link>
          )}
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
