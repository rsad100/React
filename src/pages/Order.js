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
    this.state = {
      name: undefined,
      name_product: undefined,
      number: 0,
      size: undefined,
      image: undefined,
      status: undefined,
      id: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Orders";
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactions`;
    Axios.get(url)
      .then((res) => {
        this.setState({
          name: res.data.result[this.state.number].display_name,
          name_product: res.data.result[this.state.number].name_product,
          amount: res.data.result[this.state.number].amount,
          size: res.data.result[this.state.number].size,
          price: res.data.result[this.state.number].price,
          image: res.data.result[this.state.number].image_product,
          status: res.data.result[this.state.number].status,
          id: res.data.result[this.state.number].id_transaction,
        });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactions/${this.state.id}`;
    const body = {
      status: "Done",
    };
    Axios.patch(url, body)
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
                      Dine in for {this.state.name}
                    </h1>
                    <p className={styles["aside-left-text-4"]}>
                      {this.state.status}
                    </p>
                    <div className={styles["aside-left-div"]}>
                      <div className={styles["aside-left-div-div"]}>
                        <img
                          className={styles["aside-left-image"]}
                          src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.state.image}`}
                          alt="hazelnut"
                        />
                        <div className={styles["aside-left-header-div-div"]}>
                          <p className={styles["aside-left-text-1"]}>
                            {this.state.name_product}
                          </p>
                          <p className={styles["aside-left-text-1"]}>
                            x{this.state.amount}
                          </p>
                          <p className={styles["aside-left-text-1"]}>
                            {this.state.size}
                          </p>
                        </div>
                      </div>
                      <p className={styles["aside-left-text-1"]}>
                        IDR {this.state.price}
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
                          IDR {this.state.price * this.state.amount}
                        </p>
                        <p className={styles["aside-left-text-2"]}>
                          IDR {this.state.price * this.state.amount * 0.1}
                        </p>
                        <p className={styles["aside-left-text-2"]}>IDR 0</p>
                      </aside>
                    </div>
                    <div className={styles["aside-left-div-3"]}>
                      <p className={styles["aside-left-text-3"]}>TOTAL</p>
                      <p className={styles["aside-left-text-3"]}>
                        IDR{" "}
                        {this.state.price * this.state.amount +
                          this.state.price * this.state.amount * 0.1}
                      </p>
                    </div>
                  </aside>
                  <div className={styles["buttons"]}>
                    <div
                      className={styles["button"]}
                      onClick={() => {
                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactions`;
                        const new_number = this.state.number - 1;
                        this.setState({
                          number: new_number,
                        });
                        Axios.get(url)
                          .then((res) => {
                            this.setState({
                              transaction: res.data.result,
                              name: res.data.result[new_number].display_name,
                              name_product:
                                res.data.result[new_number].name_product,
                              amount: res.data.result[new_number].amount,
                              size: res.data.result[new_number].size,
                              price: res.data.result[new_number].price,
                              image: res.data.result[new_number].image_product,
                              status: res.data.result[new_number].status,
                              id: res.data.result[new_number].id_transaction,
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
                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactions`;
                        const new_number = this.state.number + 1;
                        this.setState({
                          number: new_number,
                        });
                        Axios.get(url)
                          .then((res) => {
                            this.setState({
                              transaction: res.data.result,
                              name: res.data.result[new_number].display_name,
                              name_product:
                                res.data.result[new_number].name_product,
                              amount: res.data.result[new_number].amount,
                              size: res.data.result[new_number].size,
                              price: res.data.result[new_number].price,
                              image: res.data.result[new_number].image_product,
                              status: res.data.result[new_number].status,
                              id: res.data.result[new_number].id_transaction,
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
