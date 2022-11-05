import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import router from "./router";
import reduxStore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={reduxStore}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();

// import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
// import App from "./App";
// import PrivateRoutes from "./PrivateRoute";

// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Product from "./pages/Product";
// import Forgot from "./pages/Forgot";
// import Payment from "./pages/Payment";
// import History from "./pages/History";
// import Details from "./pages/Details";
// import EditProduct from "./pages/EditProduct";
// import NewProduct from "./pages/NewProduct";
// import NewPromo from "./pages/NewPromo";
// import EditPromo from "./pages/EditPromo";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<PrivateRoutes />}>
//           <Route path="/Home" element={<Home />}></Route>
//           <Route path="/Profile" element={<Profile />}></Route>
//           <Route path="/Payment" element={<Payment />}></Route>
//           <Route path="/History" element={<History />}></Route>
//           <Route path="/Product" element={<Product />}></Route>
//           <Route path="/Details/:id" element={<Details />}></Route>
//           <Route path="/EditProduct" element={<EditProduct />}></Route>
//           <Route path="/NewProduct" element={<NewProduct />}></Route>
//           <Route path="/NewPromo" element={<NewPromo />}></Route>
//           <Route path="/EditPromo" element={<EditPromo />}></Route>
//         </Route>
//         <Route path="/Login" element={<Login />}></Route>
//         <Route path="/Signup" element={<Signup />}></Route>

//         <Route path="/Forgot" element={<Forgot />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
