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

const router = createBrowserRouter([
  { path: "/Signup", element: <Signup /> },
  { path: "/Login", element: <Login /> },
  { path: "/Home", element: <Home /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Product", element: <Product /> },
  { path: "/Forgot", element: <Forgot /> },
  { path: "/Payment", element: <Payment /> },
  { path: "/History", element: <History /> },
  { path: "/Details/:id", element: <Details /> },
]);

export default router;
