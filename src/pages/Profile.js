import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styles from "../styles/Profile.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import pen from "../assets/pen.png";
// import def from "../assets/default.jpg";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import withNavigate from "../helpers/withNavigate";

import profileActions from "../redux/actions/profile";
import profileActions2 from "../redux/actions/profile2";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      user: [],
      email: undefined,
      address: undefined,
      mobile: undefined,
      display: undefined,
      first: undefined,
      last: undefined,
      birth: undefined,
      gender: undefined,
      file: null,
      hide1: "inline",
      hide2: "none",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    document.title = "Profile";
    const token = localStorage.getItem("token");
    const info = jwt(token);
    this.id = info.user_id;

    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/userdata`;
    console.log(this.id);
    Axios.get(url)
      .then((res) => {
        this.setState({
          userData: res.data.result,
          address: res.data.result.find((item) => item.id_user === this.id)
            .address,
          display: res.data.result.find((item) => item.id_user === this.id)
            .display_name,
          first: res.data.result.find((item) => item.id_user === this.id)
            .first_name,
          last: res.data.result.find((item) => item.id_user === this.id)
            .last_name,
          birth: res.data.result.find((item) => item.id_user === this.id)
            .birthday,
          gender: res.data.result.find((item) => item.id_user === this.id)
            .gender,
        });
        // console.log(res.data.result);
      })
      .catch((err) => console.log(err));

    const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/users`;
    Axios.get(url2)
      .then((res) => {
        this.setState({
          user: res.data.result,
          email: res.data.result.find((item) => item.id_user === this.id).email,
          mobile: res.data.result.find((item) => item.id_user === this.id)
            .phone_number,
        });
        // console.log(res.data.result);
      })
      .catch((err) => console.log(err));
    // console.log(this.state.userData);
  }

  handleFile(event) {
    const id = Number(window.location.href.split("/")[4]);
    let file = event.target.files[0];
    // this.setState({ file: file });
    let formdata = new FormData();
    formdata.append("image_user", file);
    const data = formdata;
    console.log(file.name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/userdata/${id}`;
    Axios.patch(url, data, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    localStorage.removeItem("token");
    this.props.navigate("/Login");
    event.preventDefault();
  }

  handleSubmit1(event) {
    event.preventDefault();
    // console.log(this.data);
    const id = Number(window.location.href.split("/")[4]);
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/userdata/${id}`;
    const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/users/${id}`;
    // const url = `https://intermedietebackend.vercel.app/api/v1/userdata/:${this.id}?`;
    const old_data = {
      address: this.data?.address,
      display_name: this.data?.display,
      first_name: this.data?.first,
      last_name: this.data?.last,
      birthday: this.data?.birth,
      id_user: this.id,
      gender: this.data?.gender,
    };
    const new_data = {
      address: this.state.address,
      display_name: this.state.display,
      first_name: this.state.first,
      last_name: this.state.last,
      birthday: this.state.birth,
      id_user: this.id,
      gender: this.state.gender,
    };
    const body = { ...old_data, ...new_data };
    const old_Data2 = {
      email: this.data2?.email,
      phone_number: this.data2?.phone_number,
    };
    const new_data2 = {
      email: this.state.email,
      phone_number: this.state.mobile,
    };
    const body2 = { ...old_Data2, ...new_data2 };
    // Axios.patch(url2, body2)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
    this.props.dispatch(profileActions.patchProfileAction(url, body));
    this.props.dispatch(profileActions2.patchProfileAction2(url2, body2));
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

  render() {
    this.data = this.state.userData.find((item) => item.id_user === this.id);
    this.data2 = this.state.user.find((item) => item.id_user === this.id);

    // console.log(this.state.file);
    // console.log(localStorage.getItem("token"));
    // console.log(`email ${this.state.email}`);
    // console.log(`address ${this.state.address}`);
    // console.log(`mobile ${this.state.mobile}`);
    // console.log(`display ${this.state.display}`);
    // console.log(`first ${this.state.first}`);
    // console.log(`last ${this.state.last}`);
    // console.log(`birth ${this.state.birth}`);

    return (
      <Fragment>
        <body className={styles["body-2"]}>
          <body className={styles["body-1"]}>
            <main className={styles["main"]}>
              <Nav
                home="nav-text"
                product="nav-text"
                your="nav-text"
                history="nav-text"
              />
              <section className={styles["section-main"]}>
                <section className={styles["section-main-main"]}>
                  <h1 className={styles["header-main"]}>User Profile</h1>
                  <section className={styles["profile-center"]}>
                    <aside className={styles["aside-center-left"]}>
                      <div className={styles["aside-center-header-768"]}>
                        <img
                          className={styles["profile-picture"]}
                          src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v${this.data?.image_user}`}
                          alt={"profile-img"}
                          onError={(e) =>
                            (e.target.onerror = null)(
                              (e.target.src =
                                "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg")
                            )
                          }
                        />
                        <div>
                          <p className={styles["left-aside-header"]}>
                            {this.data?.display_name}
                          </p>
                          <p className={styles["left-aside-text"]}>
                            {this.data2?.email}
                          </p>
                        </div>
                      </div>
                      <div className={styles["aside-center-btn-768-1"]}>
                        <input
                          type="file"
                          name="file"
                          id="upload"
                          className={styles["none"]}
                          onChange={(event) => {
                            this.handleFile(event);
                            // console.log(event);
                          }}
                        />
                        <label
                          for="upload"
                          className={`${styles["btn-orange"]} ${styles["size-1"]} ${styles["margin-1"]}`}
                        >
                          <p className={styles["btn-text-1"]}>Choose photo</p>
                        </label>
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
                        <form onSubmit={this.handleSubmit1}>
                          <button
                            type="submit"
                            className={`${styles["btn-orange"]} ${styles["size-2"]} ${styles["margin-4"]}`}
                          >
                            <p className={styles["btn-text"]}>Save Change</p>
                          </button>
                        </form>
                        <div
                          className={`${styles["btn-brown"]} ${styles["size-2"]} ${styles["margin-5"]}`}
                        >
                          <p className={styles["btn-text"]}>Cancel</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                          <button
                            className={`${styles["btn-white"]} ${styles["size-2"]} ${styles["margin-6"]}`}
                            type="submit"
                          >
                            <p className={styles["btn-text"]}>Log out</p>
                          </button>
                        </form>
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
                            onClick={() => {
                              if (this.state.hide1 === "inline") {
                                this.setState({
                                  hide1: "none",
                                  hide2: "inline",
                                });
                              } else {
                                this.setState({
                                  hide1: "inline",
                                  hide2: "none",
                                });
                              }
                            }}
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
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data2?.email}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="text"
                                placeholder={"Input your email"}
                                value={this.state.email}
                                onChange={(event) =>
                                  this.handleChange(event, "email")
                                }
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Delivery adress :
                              </label>
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data?.address}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="text"
                                placeholder={"Input your address"}
                                value={this.state.address}
                                onChange={(event) =>
                                  this.handleChange(event, "address")
                                }
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Mobile Number :
                              </label>
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data2?.phone_number}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your mobile number"
                                value={this.state.mobile}
                                onChange={(event) =>
                                  this.handleChange(event, "mobile")
                                }
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
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data?.display_name}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your display name"
                                value={this.state.display}
                                onChange={(event) =>
                                  this.handleChange(event, "display")
                                }
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                First name :
                              </label>
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data?.first_name}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your first name"
                                value={this.state.first}
                                onChange={(event) =>
                                  this.handleChange(event, "first")
                                }
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                Last name :
                              </label>
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data?.last_name}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="tel"
                                placeholder="Enter your last name"
                                value={this.state.last}
                                onChange={(event) =>
                                  this.handleChange(event, "last")
                                }
                              />
                            </div>
                            <div
                              className={styles["aside-center-left-left-div"]}
                            >
                              <label className={styles["label"]}>
                                YY/MM/DD :
                              </label>
                              <div
                                className={styles["input-text"]}
                                style={{ display: this.state.hide1 }}
                              >
                                {this.data?.birthday}
                              </div>
                              <input
                                style={{ display: this.state.hide2 }}
                                className={styles["input"]}
                                type="date"
                                placeholder="Enter your birthday"
                                value={this.state.birth}
                                onChange={(event) =>
                                  this.handleChange(event, "birth")
                                }
                              />
                            </div>
                          </aside>
                        </section>
                      </div>
                      <section className={styles["gender-section"]}>
                        <section className={styles["gender-selection"]}>
                          <div
                            className={
                              this.state.gender === "Male"
                                ? styles["gender-btn-2"]
                                : styles["gender-btn-1"]
                            }
                            onClick={() => {
                              this.setState({
                                gender: "Male",
                              });
                            }}
                          ></div>
                          <p>Male</p>
                        </section>
                        <section className={styles["gender-selection"]}>
                          <div
                            className={
                              this.state.gender === "Female"
                                ? styles["gender-btn-2"]
                                : styles["gender-btn-1"]
                            }
                            onClick={() => {
                              this.setState({
                                gender: "Female",
                              });
                            }}
                          ></div>
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
        </body>
      </Fragment>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    profile: reduxState.profile,
  };
};

const Profile = withNavigate(Profiles);

export default connect(mapStateToProps)(Profile);
