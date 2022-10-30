import React, { Component, Fragment } from "react";
import styles from "../styles/Payment.module.css";

import card from "../assets/card.png";
import hazelnut from "../assets/hazelnut-2.png";
import check from "../assets/check.png";
import bank from "../assets/bank.png";
import delivery from "../assets/delivery.png";
import chicken from "../assets/chicken.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

class Payment extends Component {
  render() {
    return (
      <Fragment>
        <body>
          <main className={styles["main"]}>
            <Nav />
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
                  <p className={styles["nav-text"]}>Payment</p>
                </div>
              </nav>
              <h1 className={styles["center-header"]}>
                Checkout your item now!
              </h1>
              <section className={styles["section-center-2"]}>
                <aside className={styles["aside-left"]}>
                  <h1 className={styles["aside-left-header"]}>Order Summary</h1>
                  <div className={styles["aside-left-div"]}>
                    <div className={styles["aside-left-div-div"]}>
                      <img
                        className={styles["aside-left-image"]}
                        src={hazelnut}
                        alt="hazelnut"
                      />
                      <div className={styles["aside-left-header-div-div"]}>
                        <p className={styles["aside-left-text-1"]}>
                          Hazelnut Latte
                        </p>
                        <p className={styles["aside-left-text-1"]}>x1</p>
                        <p className={styles["aside-left-text-1"]}>Regular</p>
                      </div>
                    </div>
                    <p className={styles["aside-left-text-1"]}>IDR 24.0</p>
                  </div>
                  <div className={styles["aside-left-div"]}>
                    <img
                      className={styles["aside-left-image"]}
                      src={chicken}
                      alt="chicken"
                    />
                    <div className={styles["aside-left-header-div-div"]}>
                      <p className={styles["aside-left-text-1"]}>
                        Chicken Fire Wings
                      </p>
                      <p className={styles["aside-left-text-1"]}>x1</p>
                    </div>
                    <p className={styles["aside-left-text-1"]}>IDR 30.0</p>
                  </div>
                  <div className={styles["aside-left-line"]}></div>
                  <div className={styles["aside-left-div-2"]}>
                    <aside>
                      <p className={styles["aside-left-text-2"]}>SUBTOTAL</p>
                      <p className={styles["aside-left-text-2"]}>TAX & FEES</p>
                      <p className={styles["aside-left-text-2"]}>SHIPPING</p>
                    </aside>
                    <aside>
                      <p className={styles["aside-left-text-2"]}>IDR 120.000</p>
                      <p className={styles["aside-left-text-2"]}>IDR 20.000</p>
                      <p className={styles["aside-left-text-2"]}>IDR 10.000</p>
                    </aside>
                  </div>
                  <div className={styles["aside-left-div-3"]}>
                    <p className={styles["aside-left-text-3"]}>TOTAL</p>
                    <p className={styles["aside-left-text-3"]}>IDR 150.000</p>
                  </div>
                </aside>
                <aside>
                  <div className={styles["aside-right-div-1"]}>
                    <h1 className={styles["aside-right-div-1-header"]}>
                      Address Details
                    </h1>
                    <p className={styles["aside-right-div-1-text"]}>edit</p>
                  </div>
                  <div className={styles["aside-right-div-2"]}>
                    <div className={styles["aside-right-div-2-div"]}>
                      <p className={styles["aside-right-text-1"]}>Delivery</p>
                      <p className={styles["aside-right-text-2"]}>
                        to Iskandar Street
                      </p>
                    </div>
                    <div className={styles["aside-right-div-2-line"]}></div>
                    <p className={styles["aside-right-text-2"]}>
                      Km 5 refinery road oppsite re public road, effurun,
                      jakarta
                    </p>
                    <div className={styles["aside-right-div-2-line"]}></div>
                    <p className={styles["aside-right-text-2"]}>
                      +62 81348287878
                    </p>
                  </div>
                  <div className={styles["aside-right-div-3"]}>
                    <h1 className={styles["aside-right-div-1-header"]}>
                      Payment method
                    </h1>
                  </div>
                  <div className={styles["aside-right-div-4"]}>
                    <div className={styles["aside-right-div-4-div"]}>
                      <div className={styles["aside-right-div-button"]}></div>
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
                      <div className={styles["aside-right-div-button"]}></div>
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
                      <div className={styles["aside-right-div-button"]}></div>
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
                  <div className={styles["aside-right-div-5"]}>
                    <p className={styles["aside-right-div-5-text"]}>
                      Confirm and Pay
                    </p>
                  </div>
                </aside>
              </section>
            </section>
            <Footer />
          </main>
        </body>
      </Fragment>
    );
  }
}

export default Payment;
