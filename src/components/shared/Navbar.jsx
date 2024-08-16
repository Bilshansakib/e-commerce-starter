import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
    const {logOut} = useContext(AuthContext)
  return (
    <div className="container mx-auto">
      <div className="navbar  bg-base-200 px-5 rounded-xl">
        <div className="flex-1">
          <h3 className=" text-xl">e-commerce-starter</h3>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="w-36 z-10">
                <summary>User Profile</summary>
                <ul className="bg-base-100 ">
                  <li>
                    <p className="mt-2">Sakib Bilshan</p>
                  </li>
                  <button  onClick={logOut}>
                 logout
                  </button>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
