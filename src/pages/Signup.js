import React, { Component, Fragment } from "react";
import styles from "../styles/Signup.module.css";

import signupBackground from "../assets/signup-background.webp";
import coffee from "../assets/coffee 1.png";
import google from "../assets/iconGoogle.png";
import facebook from "../assets/facebook-vector.png";
import twitter from "../assets/twitter-vector.png";
import instagram from "../assets/instagram-vector.png";

import withNavigate from "../helpers/withNavigate";

class Signups extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles.container}>
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
              <aside className={styles["right-top"]}>
                <p>Sign Up</p>
              </aside>
            </section>
            <section className={styles["aside-right-center"]}>
              <section className={styles["register-form"]} id="register">
                <form className={`${styles["full-width"]} ${styles["form"]}`}>
                  <div className={styles["input-div"]}>
                    <label className={styles["label"]}>Email Adress :</label>
                    <input
                      className={styles["input"]}
                      type="text"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className={styles["input-div"]}>
                    <label className={styles["label"]}>Password :</label>
                    <input
                      className={styles["input"]}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className={styles["input-div"]}>
                    <label className={styles["label"]}>Phone Number :</label>
                    <input
                      className={styles["input"]}
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className={`${styles["btn"]} ${styles["primary"]}`}>
                    <p className={styles["btn-text-signup"]}>Sign Up</p>
                  </div>
                  <div className={styles["btn-google"]}>
                    <img
                      className={styles["img-google"]}
                      src={google}
                      alt="iconGoogle"
                    />
                    <p className={styles["btn-text-google"]}>
                      Sign Up with Google
                    </p>
                  </div>
                </form>
              </section>
              <section className={styles["already-sect"]}>
                <p className={styles["already"]}>Already have an account?</p>
              </section>
              <section
                className={`${styles["other-content"]} ${styles["flex-center"]}`}
              >
                <section
                  className={`${styles["login-nav"]} ${styles["flex-center"]} ${styles["full-width"]}`}
                >
                  <div
                    className={`${styles["btn"]} ${styles["secondary"]}`}
                    onClick={() => {
                      this.props.navigate("/login");
                    }}
                  >
                    <p className={styles["btn-text"]}>Login Here</p>
                  </div>
                </section>
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
                  <h1 className={styles["inline"]}>Coffee Shop</h1>
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

const Signup = withNavigate(Signups);

export default Signup;
