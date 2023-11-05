import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user?.email) {
    return children;
  }

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56 text-center my-32"></progress>
      </div>
    );
  }

  return <Navigate to={"/login"} replace={true}></Navigate>;
};

export default PrivateRoute;
