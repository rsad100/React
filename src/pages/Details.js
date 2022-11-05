import React, { Component, Fragment } from "react";
import styles from "../styles/Details.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import trash from "../assets/trash.png";
import arrowRight from "../assets/arrow-right-2.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Counter from "../components/Counter.js";

import withNavigate from "../helpers/withNavigate";
import withSearchParams from "../helpers/withSearchParams";
import withRouteParams from "../helpers/withSearchParams";

class Detailss extends Component {
  constructor(props) {
    super(props);
    this.id = Number(window.location.href.split("/")[4]);
    // console.log(this.id);
    this.state = {
      products: [],
      display: "block",
    };
  }

  componentDidMount() {
    document.title = "Product Detail";
    const token = localStorage.getItem("token");
    if (token) {
      this.info = jwt(token);
    }

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
          <section className={styles["section-center-main"]}>
            <section className={styles["section-center-1"]}>
              <p>Favorite & Promo</p>
              <p>
                {">"} {this.data?.name_product}
              </p>
            </section>
            <section className={styles["section-center-2"]}>
              <div className={styles["img-div"]}>
                <img
                  className={styles["aside-left-img"]}
                  src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.data?.image_product}`}
                  alt="img"
                />
                <img
                  style={
                    this.info?.role === "admin"
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  className={styles["trash"]}
                  src={trash}
                  alt="trash"
                />
              </div>

              <aside>
                <h1 className={styles["aside-right-header"]}>
                  {this.data?.name_product}
                </h1>
                <p className={styles["aside-right-text-1"]}>
                  {this.data?.desc_product}
                </p>
                <p className={styles["aside-right-text-2"]}>
                  Delivery only on Monday to friday at 1-7 pm
                </p>
              </aside>
            </section>
            <section className={styles["section-center-3"]}>
              <aside>
                <div className={styles["aside-left-div-1"]}>
                  <h1 className={styles["aside-left-header"]}>
                    Delivery and Time
                  </h1>
                  <div className={styles["aside-left-div-2"]}>
                    <div className={styles["aside-left-div-3"]}>
                      <p className={styles["aside-left-text-1"]}>Dine in</p>
                    </div>
                    <div className={styles["aside-left-div-4"]}>
                      <p className={styles["aside-left-text-2"]}>
                        Door Delivery
                      </p>
                    </div>
                    <div className={styles["aside-left-div-5"]}>
                      <p className={styles["aside-left-text-2"]}>Pick up</p>
                    </div>
                  </div>
                  <div className={styles["aside-left-div-6"]}>
                    <p className={styles["aside-left-text-3"]}>Now</p>
                    <div className={styles["aside-left-div-7"]}>
                      <p className={styles["aside-left-text-1"]}>Yes</p>
                    </div>
                    <div className={styles["aside-left-div-5"]}>
                      <p className={styles["aside-left-text-2"]}>No</p>
                    </div>
                  </div>
                  <div className={styles["aside-left-div-8"]}>
                    <p className={styles["aside-left-text-4"]}>Set time</p>
                    <div className={styles["aside-left-div-9"]}>
                      <p className={styles["aside-left-text-5"]}>
                        Enter time for reservation
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className={styles["section-3-aside-right"]}>
                <div className={styles["aside-right-div-1"]}>
                  <Counter />
                  <p className={styles["aside-right-text-3"]}>
                    IDR {this.data?.price}
                  </p>
                </div>
                <div className={styles["aside-right-div-6"]}>Add to Cart</div>
                {this.info?.role === "admin" ? (
                  <div
                    className={styles["aside-right-div-7"]}
                    onClick={() => {
                      this.props.navigate(`/EditProduct/${this.id}`);
                    }}
                  >
                    Edit Product
                  </div>
                ) : (
                  <div className={styles["aside-right-div-7"]}>Ask a Staff</div>
                )}
              </aside>
            </section>
            <section className={styles["section-3-res"]}>
              <section className={styles["section-3"]}>
                <div className={styles["section-3-div-1"]}>
                  <h1 className={styles["section-3-text-1"]}>Choose a size</h1>
                  <div className={styles["section-3-div-2"]}>
                    <div className={styles["section-3-circle"]}>R</div>
                    <div className={styles["section-3-circle"]}>L</div>
                    <div className={styles["section-3-circle"]}>XL</div>
                  </div>
                </div>
                <div className={styles["section-3-div-3"]}>
                  <div className={styles["section-3-div-5"]}>
                    <img
                      className={styles["section-3-img"]}
                      src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.data?.image_product}`}
                      alt="img"
                    />
                    <div>
                      <h1 className={styles["section-3-header-1"]}>
                        COLD BREW
                      </h1>
                      <p className={styles["section-3-text-2"]}>x1 (Large)</p>
                      <p className={styles["section-3-text-2"]}>x1 (Regular)</p>
                    </div>
                  </div>
                  <div className={styles["section-3-div-4"]}>
                    <p className={styles["section-3-text-3"]}>Checkout</p>
                    <div
                      className={styles["section-3-circle"]}
                      onClick={() => {
                        this.props.navigate("/payment");
                      }}
                    >
                      <img
                        className={styles["section-3-img-2"]}
                        src={arrowRight}
                        alt="arrow-right"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <Footer padding="202px" />
        </main>
      </Fragment>
    );
  }
}

const Details = withRouteParams(withSearchParams(withNavigate(Detailss)));

export default Details;
