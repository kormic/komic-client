import React, { PropsWithChildren } from "react";
import styled, { useTheme } from "styled-components";

import { Footer } from "components/Footer";
import { Header } from "../Header";
import { WithPortals } from "hoc/WithPortals";
import StyledComponentsRegistry from "lib/registry";
import { GlobalStyles } from "themeConfig";

const SSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SMain = styled.main`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 1024px) {
    gap: 1rem;
    flex-direction: row;
    padding: 0 5rem;
  }
`;

export const SMainContent = styled.section`
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
  }
`;

export const SAside = styled.aside`
  flex-basis: 40%;
  // margin-bottom: 1rem;
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    order: 1;
  }
`;

// TODO: Probably this needs to be replaced by a root layout
const Layout = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <>
      <GlobalStyles theme={theme} />
      <SSection>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </SSection>
    </>
  );
};

export default WithPortals<{ children: React.ReactNode }>(Layout);
