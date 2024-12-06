import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if the current route is "/"
  return (
    <div>
      {!isHomePage && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
