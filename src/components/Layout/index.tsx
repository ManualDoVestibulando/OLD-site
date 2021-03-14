import Container from "@material-ui/core/Container";
import Header from "../Header";
import Footer from "../Footer";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => (
  <footer>
    <Header />
    <Container maxWidth="lg">
      <main>{children}</main>
    </Container>
    {/* <Footer /> */}
  </footer>
);
export default Layout;
