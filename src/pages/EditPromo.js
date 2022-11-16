import React, { Component, Fragment } from "react";
import styles from "../styles/EditPromo.module.css";
import Axios from "axios";
import jwt from "jwt-decode";
import Swal from "sweetalert2";

// import photo from "../assets/photo.png";
// import spaghetti from "../assets/spaghetti.png";
// import chevronLeft from "../assets/line-left.png";
// import chevronRight from "../assets/line-right.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import withNavigate from "../helpers/withNavigate";
import withSearchParams from "../helpers/withSearchParams";

class EditPromos extends Component {
  constructor(props) {
    super(props);
    let params = new URL(document.location).searchParams;
    this.id = Number(params.get("id"));
    this.state = {
      promos: [],
      image: undefined,
      file: "",
      name: undefined,
      price: undefined,
      desc: undefined,
      discount: undefined,
      start: undefined,
      end: undefined,
      code: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Edit Promo";

    const token = localStorage.getItem("token");
    this.info = jwt(token);
    this.id = Number(window.location.href.split("/")[5]);

    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/promos/`;
    Axios.get(url)
      .then((res) => {
        this.setState({
          promos: res.data.result,
          code: res.data.result.find((item) => item.id_promo === this.id).code,
          start: res.data.result.find((item) => item.id_promo === this.id)
            .start_date,
          end: res.data.result.find((item) => item.id_promo === this.id)
            .end_date,
          name: res.data.result.find((item) => item.id_promo === this.id)
            .name_promo,
          discount: res.data.result.find((item) => item.id_promo === this.id)
            .discount,
          desc: res.data.result.find((item) => item.id_promo === this.id)
            .desc_promo,
        });
      })
      .catch((err) => console.log(err));
  }

  handleFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    // this.file = event.target.files[0];
    this.setState({
      file: event.target.files[0],
    });
    // console.log(this.state.file);
    // console.log(file.name);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.id = Number(window.location.href.split("/")[5]);
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/promos/${this.id}`;
    let formdata = new FormData();
    // console.log(this.state.name);

    if (this.state.file) {
      formdata.append("image_promo", this.state.file);
    }
    if (this.state.name) {
      formdata.append("name_promo", this.state.name);
    }
    if (this.state.price) {
      formdata.append("normal_Price", this.state.price);
    }
    if (this.state.desc) {
      formdata.append("desc_promo", this.state.desc);
    }
    if (this.state.discount) {
      formdata.append("discount", this.state.discount);
    }
    if (this.state.start) {
      formdata.append("start_date", this.state.start);
    }
    if (this.state.end) {
      formdata.append("end_date", this.state.end);
    }
    if (this.state.code) {
      formdata.append("code", this.state.code);
    }

    const body = formdata;
    Axios.patch(url, body)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Data Changed Successfully!",
          timer: 1000,
          showConfirmButton: false,
          // timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    this.data = this.state.promos.find((item) => item.id_promo === this.id);
    // console.log(this.state.promos);
    // console.log(this.state.products);
    // console.log(this.id);
    // console.log(this.state.desc);
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Nav
              home="nav-text"
              product="nav-text"
              your="nav-text"
              history="nav-text"
            />
            <section className={styles["section-main"]}>
              <div className={styles["section-1"]}>
                <div className={styles["section-1-div-1"]}>
                  <p className={styles["section-1-text-1"]}>Favorite & Promo</p>
                  <p className={styles["section-1-text-2"]}>{">"} Edit promo</p>
                </div>
                <p className={styles["section-1-text-3"]}>cancel</p>
              </div>
              <div className={styles["section-2"]}>
                <aside className={styles["aside-left"]}>
                  {this.state.image === undefined ? (
                    <img
                      className={styles["aside-left-img-2"]}
                      src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.data?.image_promo}`}
                      alt="img"
                    />
                  ) : (
                    <img
                      className={styles["aside-left-img-2"]}
                      src={this.state.image}
                      alt="img"
                    />
                  )}
                  <button className={styles["aside-left-button-1"]}>
                    Take a picture
                  </button>
                  <input
                    type="file"
                    name="file"
                    id="upload"
                    className={styles["none"]}
                    onChange={(event) => {
                      this.handleFile(event);
                    }}
                  />
                  <label for="upload" className={styles["aside-left-button-2"]}>
                    Choose from gallery
                  </label>
                  {/* <div className={styles["aside-left-coupon"]}>
                  <div className={styles["coupon-div-1"]}>
                    <img
                      className={styles["coupon-img"]}
                      src={spaghetti}
                      alt="coupon-img"
                    />
                    <h1 className={styles["coupon-header-1"]}>
                      Beef Spaghetti
                    </h1>
                    <h1 className={styles["coupon-header-2"]}>20% OFF</h1>
                    <p className={styles["coupon-text-1-1"]}>
                      Buy 1 Choco Oreo and get 20% off for beef spaghetti
                    </p>
                  </div>
                  <div className={styles["coupon-line"]}></div>
                  <div className={styles["coupon-div-2"]}>
                    <p className={styles["coupon-text-1"]}>COUPON CODE</p>
                    <p className={styles["coupon-text-2"]}>FNPR15RG</p>
                    <p className={styles["coupon-text-3"]}>
                      Valid until ocotober 10th 2020
                    </p>
                  </div>
                </div> */}
                  <h1 className={styles["aside-left-header-1"]}>
                    Enter the discount :
                  </h1>
                  <div className={styles["dropdown"]}>
                    <input
                      type="text"
                      placeholder={"Input discount"}
                      className={styles["dropbtn"]}
                      value={this.state.discount}
                      onChange={(event) => this.handleChange(event, "discount")}
                    />
                  </div>{" "}
                  <h1 className={styles["aside-left-header-3"]}>
                    Input coupon code :
                  </h1>
                  <div className={styles["dropdown"]}>
                    <input
                      type="text"
                      placeholder={"Input coupon code"}
                      className={styles["dropbtn"]}
                      value={this.state.code}
                      onChange={(event) => this.handleChange(event, "code")}
                    />
                  </div>
                </aside>
                <aside className={styles["aside-right"]}>
                  <h1 className={styles["aside-right-header-1"]}>Name :</h1>
                  <input
                    className={styles["dropbtn"]}
                    type={"text"}
                    placeholder={"Type product name min. 50 characters"}
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event, "name")}
                  ></input>
                  {/* <h1 className={styles["aside-right-header-1"]}>Price :</h1>
                  <input
                    className={styles["aside-right-input-1"]}
                    type={"text"}
                    placeholder={this.data?.normal_price}
                    value={this.state.price}
                    onChange={(event) => this.handleChange(event, "price")}
                  ></input> */}
                  <h1 className={styles["aside-right-header-1"]}>
                    Description :
                  </h1>
                  <input
                    className={styles["dropbtn"]}
                    type={"text"}
                    placeholder={"Describe your promo min. 150 characters"}
                    value={this.state.desc}
                    onChange={(event) => this.handleChange(event, "desc")}
                  ></input>
                  {/* <h1 className={styles["aside-right-header-1"]}>
                  Input product size :
                </h1>
                <p className={styles["aside-right-text-1"]}>
                  Click size you want to use for this product
                </p>
                <div className={styles["section-3"]}>
                  <button className={styles["btn-size-1"]}>R</button>
                  <button className={styles["btn-size-1"]}>L</button>
                  <button className={styles["btn-size-1"]}>XL</button>
                  <button className={styles["btn-size-2"]}>250 gr</button>
                  <button className={styles["btn-size-2"]}>300 gr</button>
                  <button className={styles["btn-size-2"]}>500 gr</button>
                </div> */}
                  {/* <h1 className={styles["aside-right-header-1"]}>
                  Input delivery methods :
                </h1>
                <p className={styles["aside-right-text-1"]}>
                  Click methods you want to use for this product
                </p>
                <div className={styles["section-4"]}>
                  <button className={styles["aside-right-btn-1"]}>
                    Home Delivery
                  </button>
                  <button className={styles["aside-right-btn-1"]}>
                    Dine in
                  </button>
                  <button className={styles["aside-right-btn-2"]}>
                    Take away
                  </button>
                </div> */}
                  <h1 className={styles["aside-left-header-2"]}>
                    Expire date :
                  </h1>
                  <div className={styles["dropdown"]}>
                    <input
                      type="date"
                      className={styles["dropbtn"]}
                      value={this.state.start}
                      onChange={(event) => this.handleChange(event, "start")}
                    />
                  </div>
                  <div className={styles["dropdown"]}>
                    <input
                      type="date"
                      className={styles["dropbtn"]}
                      value={this.state.end}
                      onChange={(event) => this.handleChange(event, "end")}
                    />
                  </div>

                  <div className={styles["gap"]}></div>
                  <div className={styles["btns"]}>
                    <form onSubmit={this.handleSubmit}>
                      <button type="submit" className={styles["btn-save"]}>
                        Save Promo
                      </button>
                    </form>
                    <button className={styles["btn-cancel"]}>Cancel</button>
                  </div>
                </aside>
              </div>
            </section>
            <Footer padding="202px" />
          </main>
        </main>
      </Fragment>
    );
  }
}

const EditPromo = withSearchParams(withNavigate(EditPromos));

export default EditPromo;
