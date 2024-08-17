import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user?.displayName);
    
  return (
    <div className="container mx-auto">
      <div className="navbar  bg-base-200 px-5 rounded-xl">
        <div className="flex-1">
          <h3 className=" text-xl">e-commerce-starter</h3>
        </div>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 shadow bg-base-100
                bg-gradient-to-r from-yellow-100 to-gray-100  rounded-box w-52 font-semibold"
            >
              

              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

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
              

              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
                <ul className="bg-base-100 ">
                  <li>
                    <p className="mt-2">{user?.displayName}</p>
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
