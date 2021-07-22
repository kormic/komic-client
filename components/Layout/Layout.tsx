const Layout: React.FC = ({ children }) => (
  <section>
    <header>
      <nav>Navbar</nav>
    </header>
    <main>{children}</main>
    <footer>footer</footer>
  </section>
);

export default Layout;
