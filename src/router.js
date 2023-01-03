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
import PrivateElementUser from "./components/PrivateElementUser";

const router = createBrowserRouter([
  { path: "/Signup", element: <Signup /> },
  { path: "/Login", element: <Login /> },
  { path: "/", element: <Home /> },
  {
    path: "/Profile/:id",
    element: (
      <PrivateElementUser>
        <Profile />
      </PrivateElementUser>
    ),
  },
  { path: "/Product/", element: <Product /> },
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
  {
    path: "/Payment",
    element: (
      <PrivateElementUser>
        <Payment />
      </PrivateElementUser>
    ),
  },
  {
    path: "/History",
    element: (
      <PrivateElementUser>
        <History />
      </PrivateElementUser>
    ),
  },
  { path: "/product/Details/:id", element: <Details /> },
  {
    path: "/product/edit/:id",
    element: (
      <PrivateElement allowedRoles={["admin"]}>
        <EditProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/Product/new",
    element: (
      <PrivateElement>
        <NewProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/promo/new",
    element: (
      <PrivateElement>
        <NewPromo />
      </PrivateElement>
    ),
  },
  {
    path: "/promo/edit/:id",
    element: (
      <PrivateElement>
        <EditPromo />
      </PrivateElement>
    ),
  },
]);

export default router;
