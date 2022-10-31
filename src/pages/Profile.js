import React, { Component, Fragment } from "react";
import styles from "../styles/Profile.module.css";

import profileImage from "../assets/image 39.png";
import pen from "../assets/pen.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import withNavigate from "../helpers/withNavigate";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    localStorage.removeItem("token");
    this.props.navigate("/Login");
    event.preventDefault();
  }

  render() {
    console.log(localStorage.getItem("token"));
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <body>
            <main className={styles["main"]}>
              <Nav />
              <section className={styles["section-main"]}>
                <section className={styles["section-main-main"]}>
                  <h1 className={styles["header-main"]}>User Profile</h1>
                  <section className={styles["profile-center"]}>
                    <aside className={styles["aside-center-left"]}>
                      <div className={styles["aside-center-header-768"]}>
                        <img
                          className={styles["profile-picture"]}
                          src={profileImage}
                          alt="profile-background"
                        />
                        <div>
                          <p className={styles["left-aside-header"]}>
                            Zulaikha
                          </p>
                          <p className={styles["left-aside-text"]}>
                            zulaikha@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className={styles["aside-center-btn-768-1"]}>
                        <div
                          className={`${styles["btn-orange"]} ${styles["size-1"]} ${styles["margin-1"]}`}
                        >
                          <p className={styles["btn-text-1"]}>Choose photo</p>
                        </div>
                        <div
                          className={`${styles["btn-brown"]} ${styles["size-1"]} ${styles["margin-2"]}`}
                        >
                          <p className={styles["btn-text-1"]}>Remove photo</p>
                        </div>
                        <div
                          className={`${styles["btn-white"]} ${styles["size-2"]} ${styles["margin-3"]}`}
                        >
                          <p className={styles["btn-text"]}>Edit Password</p>
                        </div>
                      </div>
                      <h1 className={styles["header-center-left"]}>
                        Do you want to save the change?
                      </h1>
                      <div className={styles["aside-center-btn-768"]}>
                        <div
                          className={`${styles["btn-orange"]} ${styles["size-2"]} ${styles["margin-4"]}`}
                        >
                          <p className={styles["btn-text"]}>Save Change</p>
                        </div>
                        <div
                          className={`${styles["btn-brown"]} ${styles["size-2"]} ${styles["margin-5"]}`}
                        >
                          <p className={styles["btn-text"]}>Cancel</p>
                        </div>
                        <button
                          className={`${styles["btn-white"]} ${styles["size-2"]} ${styles["margin-6"]}`}
                          type="submit"
                        >
                          <p className={styles["btn-text"]}>Log out</p>
                        </button>
                      </div>
                    </aside>
                    <aside className={styles["aside-center-right"]}>
                      <div className={styles["aside-center-left-div"]}>
                        <div className={styles["aside-center-right-header"]}>
                          <h1 className={styles["center-header-1"]}>
                            Contacts
                          </h1>
                          <div
                            className={styles["aside-center-right-header-icon"]}
                          >
                            <img
                              className={
                                styles["aside-center-right-header-icon-img"]
                              }
                              src={pen}
                              alt="pen"
                            />
                          </div>
                        </div>
                        <section className={styles["section-center"]}>
                          <aside className={styles["aside-center-left-left"]}>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Email Address :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Delivery adress :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your address"
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Mobile Number :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your mobile number"
                              />
                            </div>
                          </aside>
                        </section>
                        <h1 className={styles["center-header-2"]}>Details</h1>
                        <section className={styles["section-center"]}>
                          <aside className={styles["aside-center-left-left"]}>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Display name :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your display name"
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                First name :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your first name"
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Last name :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your last name"
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                DD/MM/YY :
                              </label>
                              <input
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your birthday"
                              />
                            </div>
                          </aside>
                        </section>
                      </div>
                      <section className={styles["gender-section"]}>
                        <section className={styles["gender-selection"]}>
                          <div className={styles["gender-btn"]}></div>
                          <p>Male</p>
                        </section>
                        <section className={styles["gender-selection"]}>
                          <div className={styles["gender-btn"]}></div>
                          <p>Female</p>
                        </section>
                      </section>
                    </aside>
                  </section>
                </section>
              </section>
              <Footer />
            </main>
          </body>
        </form>
      </Fragment>
    );
  }
}

const Profile = withNavigate(Profiles);

export default Profile;
