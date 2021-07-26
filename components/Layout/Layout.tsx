import { Header } from '../Header';
import { MainTitle } from '../MainTitle';

const Layout: React.FC = ({ children }) => (
  <section>
    <Header />
    <MainTitle />
    <main>{children}</main>
    <footer>footer</footer>
  </section>
);

export default Layout;
