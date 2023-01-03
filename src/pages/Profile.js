import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styles from "../styles/Profile.module.css";
import Axios from "axios";
import jwt from "jwt-decode";
import Swal from "sweetalert2";

import pen from "../assets/pen.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import withNavigate from "../helpers/withNavigate";

import profileActions from "../redux/actions/profile";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      address: undefined,
      mobile: undefined,
      display: undefined,
      first: undefined,
      last: undefined,
      birth: undefined,
      gender: undefined,
      image: undefined,
      file: undefined,
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

    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/users/${this.id}`;
    console.log(this.id);
    Axios.get(url)
      .then((res) => {
        this.setState({
          address: res.data.result.find((item) => item.id_user === this.id)
            .address,
          display: res.data.result[0].display_name,
          first: res.data.result.find((item) => item.id_user === this.id)
            .first_name,
          image: `https://res.cloudinary.com/dr6hbaq0j/image/upload/v${res.data.result[0].image_user}`,
          last: res.data.result.find((item) => item.id_user === this.id)
            .last_name,
          birth: res.data.result[0].birthday,
          gender: res.data.result.find((item) => item.id_user === this.id)
            .gender,
          email: res.data.result[0].email,
          mobile: res.data.result[0].phone_number,
        });
        console.log(res.data.result[0]);
      })
      .catch((err) => console.log(err));
  }

  handleFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    this.setState({
      file: event.target.files[0],
    });
    console.log(this.state.image);
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
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/users/${id}`;
    const formdata = new FormData();
    formdata.append("email", this.state.email);
    formdata.append("address", this.state.address);
    formdata.append("display_name", this.state.display);
    formdata.append("first_name", this.state.first);
    formdata.append("last_name", this.state.last);
    formdata.append("birthday", this.state.birth);
    formdata.append("gender", this.state.gender);
    formdata.append("phone_number", this.state.mobile);
    if (this.state.file) {
      formdata.append("image_user", this.state.file);
    }
    const body = formdata;
    this.props.dispatch(profileActions.patchProfileAction(url, body));
    Swal.fire({
      title: "Profile change success!",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.reload();
      }
    });
  }

  render() {
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
                          src={
                            this.data?.image_user !== undefined
                              ? "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                              : this.state.image
                          }
                          alt={"profile-img"}
                        />
                        <div>
                          <p className={styles["left-aside-header"]}>
                            {this.state.display}
                          </p>
                          <p className={styles["left-aside-text"]}>
                            {this.state.email}
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
                                {this.state.email}
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
                                {this.state.address}
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
                                {this.state.mobile}
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
                                {this.state.display}
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
                                {this.state.first}
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
                                {this.state.last}
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
                                {this.state.birth}
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
