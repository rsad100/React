import React, { Component } from "react";
import styles from "../styles/Order.module.css";
import Axios from "axios";

import card from "../assets/card.png";
import check from "../assets/check.png";
import bank from "../assets/bank.png";
import delivery from "../assets/delivery.png";
import Swal from "sweetalert2";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import withNavigate from "../helpers/withNavigate";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { transaction: [], subtransaction: [], number: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Orders";
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactionsnew/all`;
    Axios.get(url)
      .then((res) => {
        console.log(res.data.result);
        this.setState({
          transaction: res.data.result,
        });
        const url2 = `${
          process.env.REACT_APP_BACKEND_HOST
        }/api/v1/transactionsnew/sub/${
          res.data.result[this.state.number].id_transaction_new
        }`;
        Axios.get(url2)
          .then((res) => {
            console.log(res.data.result);
            this.setState({
              subtransaction: res.data.result,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactionsnew/${
      this.state.transaction[this.state.number].id_transaction_new
    }`;
    Axios.patch(url)
      .then((res) => {
        console.log(res.data.result);
        Swal.fire({
          title: "Transaction marked as done!",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
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
                      Dine in for{" "}
                      {this.state.transaction[this.state.number]?.display_name}
                    </h1>
                    <p className={styles["aside-left-text-4"]}>
                      {this.state.transaction[this.state.number]?.status}
                    </p>
                    {this.state.subtransaction.map((item) => {
                      return (
                        <div className={styles["aside-left-div"]}>
                          <div className={styles["aside-left-div-div"]}>
                            <img
                              className={styles["aside-left-image"]}
                              src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${item.image_product}`}
                              alt="hazelnut"
                            />
                            <div
                              className={styles["aside-left-header-div-div"]}
                            >
                              <p className={styles["aside-left-text-1"]}>
                                {item.name_product}
                              </p>
                              <p className={styles["aside-left-text-1"]}>
                                x{item.amount}
                              </p>
                              <p className={styles["aside-left-text-1"]}>
                                {item.size}
                              </p>
                            </div>
                          </div>
                          <p className={styles["aside-left-text-1"]}>
                            IDR {item.price}
                          </p>
                        </div>
                      );
                    })}
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
                          {this.state.subtransaction
                            ?.map((item) => item.price * item.amount)
                            .reduce((partialSum, a) => partialSum + a, 0)}
                        </p>
                        <p className={styles["aside-left-text-2"]}>
                          IDR{" "}
                          {this.state.subtransaction
                            ?.map((item) => item.price * item.amount * 0.1)
                            .reduce((partialSum, a) => partialSum + a, 0)}
                        </p>
                        <p className={styles["aside-left-text-2"]}>IDR 0</p>
                      </aside>
                    </div>
                    <div className={styles["aside-left-div-3"]}>
                      <p className={styles["aside-left-text-3"]}>TOTAL</p>
                      <p className={styles["aside-left-text-3"]}>
                        IDR{" "}
                        {this.state.subtransaction
                          ?.map((item) => item.price * item.amount)
                          .reduce((partialSum, a) => partialSum + a, 0) +
                          this.state.subtransaction
                            ?.map((item) => item.price * item.amount * 0.1)
                            .reduce((partialSum, a) => partialSum + a, 0)}
                      </p>
                    </div>
                  </aside>
                  <div className={styles["buttons"]}>
                    <div
                      className={styles["button"]}
                      onClick={() => {
                        let new_number = 0;
                        if (this.state.number - 1 < 0) {
                          new_number = 0;
                        } else {
                          new_number = this.state.number - 1;
                        }
                        this.setState({
                          number: new_number,
                        });
                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactionsnew/sub/${this.state.transaction[new_number].id_transaction_new}`;
                        Axios.get(url)
                          .then((res) => {
                            this.setState({
                              subtransaction: res.data.result,
                            });
                          })
                          .catch((err) => console.log(err));
                      }}
                    >
                      {"<"}
                    </div>
                    <div
                      className={styles["button"]}
                      onClick={() => {
                        let new_number = 0;
                        if (
                          this.state.number + 1 >=
                          this.state.transaction.length
                        ) {
                          new_number = this.state.number;
                        } else {
                          new_number = this.state.number + 1;
                        }
                        this.setState({
                          number: new_number,
                        });
                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactionsnew/sub/${this.state.transaction[new_number].id_transaction_new}`;
                        Axios.get(url)
                          .then((res) => {
                            this.setState({
                              subtransaction: res.data.result,
                            });
                          })
                          .catch((err) => console.log(err));
                      }}
                    >
                      {">"}
                    </div>
                  </div>
                  {/* <div className={styles["slide"]}>
                      Slide to see upcoming orders {"\u2192"}
                    </div> */}
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
                  <form onSubmit={this.handleSubmit}>
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
          </main>
        </body>
      </body>
    );
  }
}

export default withNavigate(Order);
