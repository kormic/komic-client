import styled from "styled-components";

import { Portal } from "components/Portal";
import { usePortal } from "context/PortalContext";
import { Footer } from "components/Footer";
import { Header } from "../Header";
import { Login } from "components/Login";

const SSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SMain = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

const Layout: React.FC = ({ children }) => {
  const { isVisible, setIsVisible } = usePortal();

  return (
    <SSection>
      <Header />
      {children}
      <Footer />
      {isVisible && (
        <Portal onOutsideClick={() => setIsVisible?.(false)}>
          <Login />
        </Portal>
      )}
    </SSection>
  );
};

export default Layout;
