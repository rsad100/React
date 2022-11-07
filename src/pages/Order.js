import React, { Component } from "react";
import styles from "../styles/Order.module.css";

import card from "../assets/card.png";
import check from "../assets/check.png";
import bank from "../assets/bank.png";
import delivery from "../assets/delivery.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import withNavigate from "../helpers/withNavigate";

class Order extends Component {
  componentDidMount() {
    document.title = "Orders";
  }

  render() {
    return (
      <body>
        <main className={styles["main"]}>
          <form>
            <Nav
              home="nav-text"
              product="nav-text"
              your="nav-text-2"
              history="nav-text"
            />
            <section className={styles["section-center"]}>
              <nav className={styles["nav"]}>
                <div className={styles["nav-image-div-1"]}>
                  <div className={styles["nav-image-div-2"]}>
                    <img
                      className={styles["nav-image"]}
                      src={check}
                      alt="granny"
                    />
                  </div>
                  <p className={styles["nav-text"]}>Order</p>
                </div>
                <div className={styles["nav-line"]}></div>
                <div className={styles["nav-image-div-1"]}>
                  <div className={styles["nav-image-div-2"]}>
                    <img
                      className={styles["nav-image"]}
                      src={check}
                      alt="granny"
                    />
                  </div>
                  <p className={styles["nav-text"]}>Checkout</p>
                </div>

                <div className={styles["nav-line"]}></div>
                <div className={styles["nav-image-div-1"]}>
                  <div className={styles["nav-image-div-2"]}>
                    <img
                      className={styles["nav-image"]}
                      src={check}
                      alt="granny"
                    />
                  </div>
                  <p className={styles["nav-text"]}>Finish Order</p>
                </div>
              </nav>
              <h1 className={styles["center-header"]}>
                Finish your customer order now.
              </h1>
              <section className={styles["section-center-2"]}>
                <aside className={styles["aside-left-left"]}>
                  <div className={styles["aside-left-2"]}></div>
                  <div className={styles["aside-left-1"]}></div>
                  <aside className={styles["aside-left"]}>
                    <h1 className={styles["aside-left-header"]}>
                      Dine in for Zulaikha
                    </h1>
                    <p className={styles["aside-left-text-4"]}>Table 4</p>
                    <div className={styles["aside-left-div"]}>
                      <div className={styles["aside-left-div-div"]}>
                        <img
                          className={styles["aside-left-image"]}
                          src={localStorage.getItem("image_product")}
                          alt="hazelnut"
                        />
                        <div className={styles["aside-left-header-div-div"]}>
                          <p className={styles["aside-left-text-1"]}>
                            {localStorage.getItem("name_product")}
                          </p>
                          <p className={styles["aside-left-text-1"]}>
                            x{localStorage.getItem("amount_product")}
                          </p>
                          <p className={styles["aside-left-text-1"]}>
                            {localStorage.getItem("size_product")}
                          </p>
                        </div>
                      </div>
                      <p className={styles["aside-left-text-1"]}>
                        IDR {localStorage.getItem("price_product")}
                      </p>
                    </div>
                    <div className={styles["aside-left-line"]}></div>
                    <div className={styles["aside-left-div-2"]}>
                      <aside>
                        <p className={styles["aside-left-text-2"]}>SUBTOTAL</p>
                        <p className={styles["aside-left-text-2"]}>
                          TAX & FEES
                        </p>
                        <p className={styles["aside-left-text-2"]}>SHIPPING</p>
                      </aside>
                      <aside>
                        <p className={styles["aside-left-text-2"]}>
                          IDR{" "}
                          {localStorage.getItem("price_product") *
                            localStorage.getItem("amount_product")}
                        </p>
                        <p className={styles["aside-left-text-2"]}>
                          IDR{" "}
                          {localStorage.getItem("price_product") *
                            localStorage.getItem("amount_product") *
                            0.1}
                        </p>
                        <p className={styles["aside-left-text-2"]}>IDR 0</p>
                      </aside>
                    </div>
                    <div className={styles["aside-left-div-3"]}>
                      <p className={styles["aside-left-text-3"]}>TOTAL</p>
                      <p className={styles["aside-left-text-3"]}>
                        IDR{" "}
                        {localStorage.getItem("price_product") *
                          localStorage.getItem("amount_product") +
                          localStorage.getItem("price_product") *
                            localStorage.getItem("amount_product") *
                            0.1}
                      </p>
                    </div>
                  </aside>
                  <div className={styles["slide"]}>
                    Slide to see upcoming orders {"\u2192"}
                  </div>
                </aside>
                <aside className={styles["aside-right"]}>
                  <div className={styles["aside-right-div-3"]}>
                    <h1 className={styles["aside-right-div-1-header"]}>
                      Payment method
                    </h1>
                  </div>
                  <div className={styles["aside-right-div-4"]}>
                    <div className={styles["aside-right-div-4-div"]}>
                      <button className={styles[""]}></button>
                      <div className={styles["aside-right-div-icon"]}>
                        <img
                          className={styles["icon-image"]}
                          src={card}
                          alt="card"
                        />
                      </div>
                      <p className={styles["aside-right-text-2"]}>Card</p>
                    </div>
                    <div className={styles["aside-right-div-4-line"]}></div>
                    <div className={styles["aside-right-div-4-div-2"]}>
                      <button className={styles[""]}></button>
                      <div className={styles["aside-right-div-icon-2"]}>
                        <img
                          className={styles["icon-image-2"]}
                          src={bank}
                          alt="bank"
                        />
                      </div>
                      <p className={styles["aside-right-text-2"]}>
                        Bank account
                      </p>
                    </div>
                    <div className={styles["aside-right-div-4-line"]}></div>
                    <div className={styles["aside-right-div-4-div-3"]}>
                      <button className={styles[""]}></button>
                      <div className={styles["aside-right-div-icon-3"]}>
                        <img
                          className={styles["icon-image-3"]}
                          src={delivery}
                          alt="delivery"
                        />
                      </div>
                      <p className={styles["aside-right-text-2"]}>
                        Cash on delivery
                      </p>
                    </div>
                  </div>
                  <form>
                    <button
                      type="submit"
                      className={styles["aside-right-div-5"]}
                    >
                      <p className={styles["aside-right-div-5-text"]}>
                        Mark as done
                      </p>
                    </button>
                  </form>
                </aside>
              </section>
            </section>
            <Footer />
          </form>
        </main>
      </body>
    );
  }
}

export default withNavigate(Order);
