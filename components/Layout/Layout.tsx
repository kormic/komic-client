import styled from "styled-components";

import { Footer } from "components/Footer";
import { Header } from "../Header";
import { MainTitle } from "../MainTitle";

const SSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SMain = styled.main`
  flex-grow: 1;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
`;

const Layout: React.FC = ({ children }) => (
  <SSection>
    <Header />
    <MainTitle />
    <SMain>{children}</SMain>
    <Footer />
  </SSection>
);

export default Layout;
