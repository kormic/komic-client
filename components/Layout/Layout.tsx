import React from "react";
import styled from "styled-components";

import { Footer } from "components/Footer";
import { Header } from "../Header";
import { withPortals } from "hoc/withPortals";

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

const Layout: React.FC = ({ children }) => {
  return (
    <SSection>
      <Header />
      {children}
      <Footer />
    </SSection>
  );
};

export default withPortals<{ children: React.ReactNode }>(Layout);
