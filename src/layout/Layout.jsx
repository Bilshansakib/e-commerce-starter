import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('register')
  return (
    <div>
      <div >
       {noHeaderFooter || <Navbar />}
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
