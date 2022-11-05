import React, { Component, Fragment } from "react";
import styles from "../styles/NewProduct.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import photo from "../assets/photo.png";
import chevronLeft from "../assets/line-left.png";
import chevronRight from "../assets/line-right.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import withNavigate from "../helpers/withNavigate";
import withSearchParams from "../helpers/withSearchParams";

class NewProducts extends Component {
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
              <p className={styles["section-1-text-1"]}>Favorite & Promo</p>
              <p className={styles["section-1-text-2"]}>
                {">"} Add new product
              </p>
            </div>
            <div className={styles["section-2"]}>
              <aside className={styles["aside-left"]}>
                <div className={styles["aside-left-img"]}>
                  <img src={photo} alt="img" />
                </div>
                <button className={styles["aside-left-button-1"]}>
                  Take a picture
                </button>
                <button className={styles["aside-left-button-2"]}>
                  Choose from gallery
                </button>
                <h1 className={styles["aside-left-header-1"]}>
                  Delivery Hour :
                </h1>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropbtn"]}>
                    <p>Select start hour</p>
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
                    <p>Select end hour</p>
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
                <h1 className={styles["aside-left-header-2"]}>Input stock :</h1>
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
                <button className={styles["btn-save"]}>Save Product</button>
                <button className={styles["btn-cancel"]}>Cancel</button>
              </aside>
            </div>
          </section>
          <Footer padding="202px" />
        </main>
      </Fragment>
    );
  }
}

const NewProduct = withSearchParams(withNavigate(NewProducts));

export default NewProduct;
