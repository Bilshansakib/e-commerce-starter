import { Navigate, useLocation } from "react-router-dom";
import { children, useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();

  if (loading) {
    return (
      <div className=" items-center py-4 text-center rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
        <div className="flex p-4 space-x-4 sm:px-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="flex-1 py-2 space-y-4">
            <div className="w-full h-3 rounded bg-gray-300"></div>
            <div className="w-5/6 h-3 rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to="/" replace={true}></Navigate>
  );
};

export default PrivateRoute;