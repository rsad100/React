import React, { Component, Fragment } from "react";
import styles from "../styles/Payment.module.css";
import jwt from "jwt-decode";
import Axios from "axios";

import card from "../assets/card.png";
import check from "../assets/check.png";
import bank from "../assets/bank.png";
import delivery from "../assets/delivery.png";
import withNavigate from "../helpers/withNavigate";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      user: [],
      button1: "aside-right-div-button-2",
      button2: "aside-right-div-button",
      button3: "aside-right-div-button",
      payment: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Payment";

    const token = localStorage.getItem("token");
    if (token) {
      this.info = jwt(token);
      this.id = this.info.user_id;
      // console.log(this.id);
    }

    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/userdata`;
    console.log(this.id);
    Axios.get(url)
      .then((res) => {
        this.setState({
          userData: res.data.result,
        });
        // console.log(res.data.result);
      })
      .catch((err) => console.log(err));

    const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/users`;
    Axios.get(url2)
      .then((res) => {
        this.setState({
          user: res.data.result,
        });
        // console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactions/`;
    const body = {
      id_product: localStorage.getItem("id_product"),
      amount: localStorage.getItem("amount_product"),
      id_user: this.id,
      id_payment: this.state.payment,
    };
    Axios.post(url, body)
      .then((res) => {
        console.log(res.data.result);
        this.props.navigate("/History");
      })
      .catch((err) => console.log(err));
  }

  render() {
    this.data = this.state.userData.find((item) => item.id_user === this.id);
    this.data2 = this.state.user.find((item) => item.id_user === this.id);
    return (
      <Fragment>
        <body className={styles["body-2"]}>
          <body className={styles["body-1"]}>
            <main className={styles["main"]}>
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
                    <p className={styles["nav-text"]}>Payment</p>
                  </div>
                </nav>
                <h1 className={styles["center-header"]}>
                  Checkout your item now!
                </h1>
                <section className={styles["section-center-2"]}>
                  <aside className={styles["aside-left"]}>
                    <h1 className={styles["aside-left-header"]}>
                      Order Summary
                    </h1>
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
                  <aside className={styles["aside-right"]}>
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
                          to {this.data?.address}
                        </p>
                      </div>
                      <div className={styles["aside-right-div-2-line"]}></div>
                      {/* <p className={styles["aside-right-text-2"]}>
                      Km 5 refinery road oppsite re public road, effurun,
                      jakarta
                    </p>
                    <div className={styles["aside-right-div-2-line"]}></div> */}
                      <p className={styles["aside-right-text-2"]}>
                        {this.data2?.phone_number}
                      </p>
                    </div>
                    <div className={styles["aside-right-div-3"]}>
                      <h1 className={styles["aside-right-div-1-header"]}>
                        Payment method
                      </h1>
                    </div>
                    <div className={styles["aside-right-div-4"]}>
                      <div className={styles["aside-right-div-4-div"]}>
                        <button
                          className={styles[this.state.button1]}
                          onClick={() => {
                            this.setState({
                              button1: "aside-right-div-button-2",
                              button2: "aside-right-div-button",
                              button3: "aside-right-div-button",
                              payment: 1,
                            });
                          }}
                        ></button>
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
                        <button
                          className={styles[this.state.button2]}
                          onClick={() => {
                            this.setState({
                              button1: "aside-right-div-button",
                              button2: "aside-right-div-button-2",
                              button3: "aside-right-div-button",
                              payment: 2,
                            });
                          }}
                        ></button>
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
                        <button
                          className={styles[this.state.button3]}
                          onClick={() => {
                            this.setState({
                              button1: "aside-right-div-button",
                              button2: "aside-right-div-button",
                              button3: "aside-right-div-button-2",
                              payment: 3,
                            });
                          }}
                        ></button>
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
                    <form onSubmit={this.handleSubmit}>
                      <button
                        type="submit"
                        className={styles["aside-right-div-5"]}
                      >
                        <p className={styles["aside-right-div-5-text"]}>
                          Confirm and Pay
                        </p>
                      </button>
                    </form>
                  </aside>
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

const Payment = withNavigate(Payments);

export default Payment;
