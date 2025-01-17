import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { GlobalProvider } from "../contexts/GlobalContext";

const Layout = () => {
  return (
    <GlobalProvider>
      <Header />
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
};

export default Layout;
