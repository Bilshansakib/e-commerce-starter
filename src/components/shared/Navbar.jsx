import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user?.displayName);
    
  return (
    <div className="container mx-auto">
      <div className="navbar  bg-slate-400 px-5 rounded">
        <div className="flex-1">
          <h3 className=" text-xl">Product Hub</h3>
          <h6 className=" text-xl ml-2">( e-commerce-starter )</h6>
        </div>

       

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="w-36 z-10">
                <summary>User Profile</summary>
                <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 shadow bg-base-100
                bg-gradient-to-r from-yellow-100 to-gray-100  rounded-box w-52 font-semibold"
            >
              

              {
                user? <><li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li></>:<>
              Please Login ...
              </>
              }
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
