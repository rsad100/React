import React, { Component, Fragment } from "react";
import styles from "../styles/EditProduct.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import chevronLeft from "../assets/line-left.png";
import chevronRight from "../assets/line-right.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import withNavigate from "../helpers/withNavigate";
import withSearchParams from "../helpers/withSearchParams";

class EditProducts extends Component {
  constructor(props) {
    super(props);
    this.id = Number(window.location.href.split("/")[4]);
    // console.log(this.id);
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
                {">"} {this.data?.name_product} {">"} Edit Product
              </p>
            </div>
            <div className={styles["section-2"]}>
              <aside>
                <img
                  className={styles["product"]}
                  src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.data?.image_product}`}
                  alt="trash"
                />
                <div className={styles["aside-left-text-3"]}>
                  <p className={styles["aside-left-text-1"]}>
                    Delivery only on
                  </p>
                  <p className={styles["aside-left-text-2"]}>
                    Monday to friday
                  </p>
                  <p className={styles["aside-left-text-1"]}>at</p>
                  <p className={styles["aside-left-text-2"]}>1 - 7 pm</p>
                </div>
              </aside>
              <aside className={styles["aside-right"]}>
                <h1 className={styles["aside-right-header"]}>
                  {this.data?.name_product}
                </h1>
                <div className={styles["line"]}></div>
                <p className={styles["aside-right-text-1"]}>
                  IDR {this.data?.price}
                </p>
                <div className={styles["line"]}></div>
                <p className={styles["aside-right-text-2"]}>
                  {this.data?.desc_product}
                </p>
                <div className={styles["line-2"]}></div>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropbtn"]}>
                    <p>Select Size</p>
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
                    <p>Select Size</p>
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
                <div className={styles["section-3"]}>
                  <div className={styles["counter-main"]}>
                    <div className={styles["counter-text-1"]}>+</div>
                    <div className={styles["counter-text-2"]}>2</div>
                    <div className={styles["counter-text-1"]}>-</div>
                  </div>
                  <button className={styles["aside-right-button-1"]}>
                    Add to Cart
                  </button>
                </div>
                <button className={styles["aside-right-button-2"]}>
                  Save Change
                </button>
              </aside>
            </div>
          </section>
          <Footer padding="202px" />
        </main>
      </Fragment>
    );
  }
}

const EditProduct = withSearchParams(withNavigate(EditProducts));

export default EditProduct;
