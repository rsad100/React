import React, { Component, Fragment } from "react";
import styles from "../styles/EditPromo.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import spaghetti from "../assets/spaghetti.png";
import chevronLeft from "../assets/line-left.png";
import chevronRight from "../assets/line-right.png";

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
      products: [],
    };
  }

  componentDidMount() {
    document.title = "Edit Product";

    const token = localStorage.getItem("token");
    this.info = jwt(token);

    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/`;
    Axios.get(url)
      .then((res) => {
        this.setState({
          products: res.data.result,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    this.data = this.state.products.find((item) => item.id_product === this.id);
    // console.log(this.state.products);
    // console.log(this.id);
    return (
      <Fragment>
        <main>
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
                <p className={styles["section-1-text-2"]}>
                  {">"} Add new promo
                </p>
              </div>
              <p className={styles["section-1-text-3"]}>cancel</p>
            </div>
            <div className={styles["section-2"]}>
              <aside className={styles["aside-left"]}>
                <div className={styles["aside-left-coupon"]}>
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
                </div>
                <h1 className={styles["aside-left-header-1"]}>
                  Enter the discount :
                </h1>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropbtn"]}>
                    <p>Input discount</p>
                    <div>
                      <img
                        className={styles["chevron-left"]}
                        src={chevronLeft}
                        alt="chevronLeft"
                      />
                      <img
                        className={styles["chevron-left"]}
                        src={chevronRight}
                        alt="chevronRight"
                      />
                    </div>
                  </button>
                  <div className={styles["dropdown-content"]}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                  </div>
                </div>
                <h1 className={styles["aside-left-header-2"]}>Expire date :</h1>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropbtn"]}>
                    <p>Select start date</p>
                    <div>
                      <img
                        className={styles["chevron-left"]}
                        src={chevronLeft}
                        alt="chevronLeft"
                      />
                      <img
                        className={styles["chevron-left"]}
                        src={chevronRight}
                        alt="chevronRight"
                      />
                    </div>
                  </button>
                  <div className={styles["dropdown-content"]}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                  </div>
                </div>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropbtn"]}>
                    <p>Select end date</p>
                    <div>
                      <img
                        className={styles["chevron-left"]}
                        src={chevronLeft}
                        alt="chevronLeft"
                      />
                      <img
                        className={styles["chevron-left"]}
                        src={chevronRight}
                        alt="chevronRight"
                      />
                    </div>
                  </button>
                  <div className={styles["dropdown-content"]}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                  </div>
                </div>
                <h1 className={styles["aside-left-header-3"]}>
                  Input coupon code :
                </h1>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropbtn"]}>
                    <p>Input stock</p>
                    <div>
                      <img
                        className={styles["chevron-left"]}
                        src={chevronLeft}
                        alt="chevronLeft"
                      />
                      <img
                        className={styles["chevron-left"]}
                        src={chevronRight}
                        alt="chevronRight"
                      />
                    </div>
                  </button>
                  <div className={styles["dropdown-content"]}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                  </div>
                </div>
              </aside>
              <aside className={styles["aside-right"]}>
                <h1 className={styles["aside-right-header-1"]}>Name :</h1>
                <input
                  className={styles["aside-right-input-1"]}
                  type={"text"}
                  placeholder={"Type product name min.50 characters"}
                ></input>
                <h1 className={styles["aside-right-header-1"]}>Price :</h1>
                <input
                  className={styles["aside-right-input-1"]}
                  type={"text"}
                  placeholder={"Type the price"}
                ></input>
                <h1 className={styles["aside-right-header-1"]}>
                  Description :
                </h1>
                <input
                  className={styles["aside-right-input-1"]}
                  type={"text"}
                  placeholder={"Describe your product min.150 characters"}
                ></input>
                <h1 className={styles["aside-right-header-1"]}>
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
                </div>
                <h1 className={styles["aside-right-header-1"]}>
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
                </div>
                <div className={styles["gap"]}></div>
                <div className={styles["btns"]}>
                  <button className={styles["btn-save"]}>Save Promo</button>
                  <button className={styles["btn-cancel"]}>Cancel</button>
                </div>
              </aside>
            </div>
          </section>
          <Footer padding="202px" />
        </main>
      </Fragment>
    );
  }
}

const EditPromo = withSearchParams(withNavigate(EditPromos));

export default EditPromo;
