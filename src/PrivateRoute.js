import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  let auth = token;
  return auth ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoutes;
