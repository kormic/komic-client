import styled from 'styled-components';
import { Header } from '../Header';
import { MainTitle } from '../MainTitle';

const SMain = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
`;

const Layout: React.FC = ({ children }) => (
  <section>
    <Header />
    <MainTitle />
    <SMain>{children}</SMain>
    <footer>footer</footer>
  </section>
);

export default Layout;
