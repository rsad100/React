import React, { Component, Fragment } from "react";
import styles from "../styles/Forgot.module.css";

import signupBackground from "../assets/signup-background.webp";
import coffee from "../assets/coffee 1.png";
import facebook from "../assets/facebook-vector.png";
import twitter from "../assets/twitter-vector.png";
import instagram from "../assets/instagram-vector.png";

class Forgot extends Component {
  componentDidMount() {
    document.title = "Forgot Password";
  }

  render() {
    return (
      <Fragment>
        <main className={styles["container"]}>
          <aside className={styles["side-content"]}>
            <img
              className={styles["side-image"]}
              src={signupBackground}
              alt="granny-read-book"
            />
          </aside>
          <section className={styles["form-content"]}>
            <section className={styles["top-content"]}>
              <section className={styles["section-right-header"]}>
                <img
                  className={styles["img-left-top"]}
                  src={coffee}
                  alt="coffee"
                />
                <p className={`${styles["left-top-font"]}`}>Coffee Shop</p>
              </section>
            </section>
            <section className={styles["section-2"]}>
              <h1 className={styles["section-2-header"]}>
                Forgot your password?
              </h1>
              <p className={styles["section-2-text"]}>
                Don't worry, we got you back!
              </p>
            </section>
            <section className={styles["register-form"]} id="register">
              <form className={`${styles["full-width"]} ${styles["form"]}`}>
                <div className={styles["input-div"]}>
                  <input
                    className={styles["input"]}
                    type="text"
                    placeholder="Enter your email address to get link"
                  />
                </div>
                <div className={`${styles["btn"]} ${styles["primary"]}`}>
                  <p className={styles["btn-text-signup"]}>Send</p>
                </div>
              </form>
            </section>
            <section className={styles["section-4"]}>
              <p className={styles["section-4-text-1"]}>
                Click here if you didn't receive any link in 2 minutes
              </p>
              <p className={styles["section-4-text-2"]}>01:52</p>
            </section>
            <section
              className={`${styles["other-content"]} ${styles["flex-center"]}`}
            >
              <section
                className={`${styles["login-nav"]} ${styles["full-width"]} ${styles["flex-center"]}`}
              >
                <div className={`${styles["btn"]} ${styles["secondary"]}`}>
                  <p className={styles["btn-text"]}>Resend Link</p>
                </div>
              </section>
            </section>
            <footer className={styles["footer"]}>
              <aside className={styles["app-info"]}>
                <section className={styles["footer-header"]}>
                  <img
                    className={styles["img-left-top"]}
                    src={coffee}
                    alt="coffee"
                  />
                  <h1>Coffee Shop</h1>
                </section>
                <p className={styles["aside-font"]}>
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
                <section className={styles["aside-image-container"]}>
                  <img
                    className={styles["aside-image"]}
                    src={facebook}
                    alt="facebook-vector"
                  />
                  <img
                    className={styles["aside-image"]}
                    src={twitter}
                    alt="twitter-vector"
                  />
                  <img
                    className={styles["aside-image"]}
                    src={instagram}
                    alt="instagram-vector"
                  />
                </section>
                <p className={styles["aside-font-copyright"]}>
                  ©2020CoffeeStore
                </p>
              </aside>
              <aside className={styles["address"]}>
                <h1 className={styles["header-aside"]}>Product</h1>
                <section className={styles["container"]}>
                  <aside className={styles["address-text-left"]}>
                    <p>Download</p>
                    <p>Locations</p>
                    <p>Blog</p>
                  </aside>
                  <aside className={styles["address-text-right"]}>
                    <p>Pricing</p>
                    <p>Countries</p>
                  </aside>
                </section>
                <h1 className={styles["header-aside"]}>Engage</h1>
                <section className={styles["container"]}>
                  <aside className={styles["address-text-left"]}>
                    <p>Coffee Shop?</p>
                    <p>FAQ</p>
                    <p>Terms of Service</p>
                  </aside>
                  <aside className={styles["address-text-right"]}>
                    <p>About us</p>
                    <p>Privacy Policy</p>
                  </aside>
                </section>
              </aside>
            </footer>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default Forgot;
