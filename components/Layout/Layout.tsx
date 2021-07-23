import { Header } from "../Header";

const Layout: React.FC = ({ children }) => (
  <section>
    <Header />
    <main>{children}</main>
    <footer>footer</footer>
  </section>
);

export default Layout;
