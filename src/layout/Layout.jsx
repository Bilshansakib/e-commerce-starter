import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Layout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('register')
  return (
    <div>
      <div >
       {noHeaderFooter || <Navbar />}
      </div>

      <Outlet />
      <div>
      {noHeaderFooter || <Footer></Footer>}
      </div>
    </div>
  );
};

export default Layout;
