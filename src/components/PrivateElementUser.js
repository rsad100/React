import React from "react";
import { Navigate } from "react-router-dom";
import jwt from "jwt-decode";

// props.children => mengakses komponen child
class PrivateElementUser extends React.Component {
  render() {
    // conditional, jika true semua maka return kan komponen child
    // jika false, maka redirect
    // kondisi 1 = apakah sudah login
    const { allowedRoles = ["user", "admin"], children } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      this.info = jwt(token);
    }
    if (!this.info)
      return (
        <Navigate
          to="/Login"
          replace={true}
          state={{ msg: "Silahkan Login Terlebih Dahulu", isRedirected: true }}
        />
      );
    // kondisi 2 = apakah sesuai dengan role
    if (allowedRoles.length > 0)
      if (!allowedRoles.includes(this.info.role))
        return (
          <Navigate
            to="/Home"
            replace={true}
            state={{
              msg: "Forbidden",
              isRedirected: true,
            }}
          />
        );
    return children;
  }
}

export default PrivateElementUser;
