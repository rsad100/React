import { createBrowserRouter } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Forgot from "./pages/Forgot";
import Payment from "./pages/Payment";
import History from "./pages/History";
import Details from "./pages/Details";
import EditProduct from "./pages/EditProduct";
import NewProduct from "./pages/NewProduct";
import NewPromo from "./pages/NewPromo";
import EditPromo from "./pages/EditPromo";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import PrivateElement from "./components/PrivateElement";

const router = createBrowserRouter([
  { path: "/Signup", element: <Signup /> },
  { path: "/Login", element: <Login /> },
  { path: "/Home", element: <Home /> },
  {
    path: "/Profile/:id",
    element: <Profile />,
  },
  { path: "/Product", element: <Product /> },
  {
    path: "/Dashboard",
    element: (
      <PrivateElement>
        <Dashboard />
      </PrivateElement>
    ),
  },
  {
    path: "/Order",
    element: (
      <PrivateElement>
        <Order />
      </PrivateElement>
    ),
  },
  { path: "/Forgot", element: <Forgot /> },
  { path: "/Payment", element: <Payment /> },
  { path: "/History", element: <History /> },
  { path: "/Details/:id", element: <Details /> },
  {
    path: "/EditProduct/:id",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <EditProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/NewProduct",
    element: (
      <PrivateElement>
        <NewProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/NewPromo",
    element: (
      <PrivateElement>
        <NewPromo />
      </PrivateElement>
    ),
  },
  {
    path: "/EditPromo/:id",
    element: (
      <PrivateElement>
        <EditPromo />
      </PrivateElement>
    ),
  },
]);

export default router;
