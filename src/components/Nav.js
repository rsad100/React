import React, { Component } from "react";
import styles from "../styles/Profile.module.css";

import coffee from "../assets/coffee 1.png";
import search from "../assets/search.png";
import chat from "../assets/chat-1.png";
import navImage from "../assets/image 39.png";

import withNavigate from "../helpers/withNavigate";

class Navigate extends Component {
  render() {
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
            className={styles["nav-text"]}
            onClick={() => {
              this.props.navigate("/home");
            }}
          >
            Home
          </p>
          <p
            className={styles["nav-text"]}
            onClick={() => {
              this.props.navigate("/product");
            }}
          >
            Product
          </p>
          <p
            className={styles["nav-text"]}
            onClick={() => {
              this.props.navigate("/payment");
            }}
          >
            Your Cart
          </p>
          <p
            className={styles["nav-text"]}
            onClick={() => {
              this.props.navigate("/history");
            }}
          >
            History
          </p>
        </section>
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
              this.props.navigate("/profile");
            }}
            src={navImage}
            alt="granny-read-book"
          />
        </section>
      </nav>
    );
  }
}

const Nav = withNavigate(Navigate);

export default Nav;
