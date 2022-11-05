import React, { Component } from "react";
import styles from "../styles/Profile.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import coffee from "../assets/coffee 1.png";
import search from "../assets/search.png";
import chat from "../assets/chat-1.png";

import withNavigate from "../helpers/withNavigate";

class Navigate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/userdata`;
    this.token = localStorage.getItem("token");
    if (this.token) {
      const info = jwt(this.token);
      this.id = info.user_id;
    }

    // console.log(id);
    Axios.get(url)
      .then((res) => {
        this.setState({
          userData: res.data.result,
        });
        // console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  }

  render() {
    // console.log(this.id);
    this.data = this.state.userData.find((item) => item.id_user === this.id);
    // console.log(this.data);
    //console.log(this.props.searchValue);
    return (
      <nav className={styles["nav-bar"]}>
        <section className={styles["nav-header"]}>
          <img
            className={styles["nav-image nav-header-image-margin"]}
            src={coffee}
            alt="search"
          />
          <p>Coffee Shop</p>
        </section>
        <section className={styles["nav-bar-middle"]}>
          <p
            className={styles[this.props.home]}
            onClick={() => {
              this.props.navigate("/home");
            }}
          >
            Home
          </p>
          <p
            className={styles[this.props.product]}
            onClick={() => {
              this.props.navigate("/product");
            }}
          >
            Product
          </p>
          <p
            className={styles[this.props.your]}
            onClick={() => {
              this.props.navigate("/payment");
            }}
          >
            Your Cart
          </p>
          <p
            className={styles[this.props.history]}
            onClick={() => {
              this.props.navigate("/history");
            }}
          >
            History
          </p>
        </section>
        {!this.token ? (
          <section className={styles["nav-bar-right-2"]}>
            <div
              className={styles["nav-bar-login"]}
              onClick={() => {
                this.props.navigate("/Login");
              }}
            >
              Login
            </div>
            <div
              className={styles["nav-bar-signup"]}
              onClick={() => {
                this.props.navigate("/Signup");
              }}
            >
              Sign Up
            </div>
          </section>
        ) : (
          <section className={styles["nav-bar-right"]}>
            <div className={styles["search-bar"]}>
              <img
                className={styles["nav-image-right-padding"]}
                src={search}
                alt="search"
              />
              <input
                className={styles["search-bar-input"]}
                type="text"
                placeholder="Search"
                value={this.props.searchValue}
                onChange={this.props.handleChange}
              />
            </div>
            <img
              className={styles["nav-image-right-padding-2"]}
              src={chat}
              alt="chat"
            />
            <img
              className={styles["nav-image-3"]}
              onClick={() => {
                this.props.navigate(`/profile/${this.id}`);
              }}
              src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.data?.image_user}`}
              alt="granny-read-book"
            />
          </section>
        )}
      </nav>
    );
  }
}

const Nav = withNavigate(Navigate);

export default Nav;
