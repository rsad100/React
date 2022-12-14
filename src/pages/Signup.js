import React, { Component, Fragment } from "react";
import Axios from "axios";
import styles from "../styles/Signup.module.css";
import Swal from "sweetalert2";

import signupBackground from "../assets/signup-background.webp";
import coffee from "../assets/coffee 1.png";
import google from "../assets/iconGoogle.png";
import facebook from "../assets/facebook-vector.png";
import twitter from "../assets/twitter-vector.png";
import instagram from "../assets/instagram-vector.png";

import withNavigate from "../helpers/withNavigate";

class Signups extends Component {
  componentDidMount() {
    document.title = "Sign Up";
  }

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/users/register`;
    const data = {
      phone_number: this.state.phone,
      email: this.state.email,
      password: this.state.password,
    };
    Axios.post(url, data)
      .then((res) => {
        console.log(res.data.msg);
        Swal.fire({
          title: "Register Success!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            this.props.navigate("/Login");
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Email or phone number already exist",
          showConfirmButton: false,
          timer: 1200,
        });
      });
  }

  render() {
    // console.log(`email ${this.state.email}`);
    // console.log(`password ${this.state.password}`);
    // console.log(`phone ${this.state.phone}`);
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main-1"]}>
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
                    <form
                      className={`${styles["full-width"]} ${styles["form"]}`}
                      onSubmit={this.handleSubmit}
                    >
                      <div className={styles["input-div"]}>
                        <label className={styles["label"]}>
                          Email Adress :
                        </label>
                        <input
                          className={styles["input"]}
                          type="text"
                          placeholder="Enter your email address"
                          value={this.state.email}
                          onChange={(event) =>
                            this.handleChange(event, "email")
                          }
                        />
                      </div>
                      <div className={styles["input-div"]}>
                        <label className={styles["label"]}>Password :</label>
                        <input
                          className={styles["input"]}
                          type="password"
                          placeholder="Enter your password"
                          value={this.state.password}
                          onChange={(event) =>
                            this.handleChange(event, "password")
                          }
                        />
                      </div>
                      <div className={styles["input-div"]}>
                        <label className={styles["label"]}>
                          Phone Number :
                        </label>
                        <input
                          className={styles["input"]}
                          type="tel"
                          placeholder="Enter your phone number"
                          value={this.state.phone}
                          onChange={(event) =>
                            this.handleChange(event, "phone")
                          }
                        />
                      </div>
                      <button
                        className={`${styles["btn"]} ${styles["primary"]}`}
                      >
                        <p className={styles["btn-text-signup"]}>Sign Up</p>
                      </button>
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
                    <p className={styles["already"]}>
                      Already have an account?
                    </p>
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
                      ??2020CoffeeStore
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
          </main>
        </main>
      </Fragment>
    );
  }
}

const Signup = withNavigate(Signups);

export default Signup;
