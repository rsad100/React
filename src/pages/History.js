import React, { Component, Fragment } from "react";
import styles from "../styles/History.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CardHistory from "../components/CardHistory";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    document.title = "History";

    const token = localStorage.getItem("token");
    if (token) {
      this.info = jwt(token);
      this.id = this.info.user_id;
      // console.log(this.id);
    }

    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/transactions`;
    Axios.get(url)
      .then((res) => {
        this.setState({
          transactions: res.data.result,
        });
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  }

  render() {
    this.data = this.state.transactions.filter(
      (item) => item.id_user === this.id
    );
    console.log(this.data);
    return (
      <Fragment>
        <main>
          <Nav
            home="nav-text"
            product="nav-text"
            your="nav-text"
            history="nav-text-2"
          />
          <section className={styles["section-center"]}>
            <h1 className={styles["section-center-header"]}>
              Let's see what you have bought!
            </h1>
            <p className={styles["section-center-header-text"]}>
              select item to delete
            </p>
            <p className={styles["section-center-text"]}>Select All</p>
            <section className={styles["section-center-2"]}>
              {this.data?.map((transaction) => {
                return (
                  <CardHistory
                    amount={transaction.amount}
                    img={transaction.image_product}
                    name={transaction.name_product}
                    price={`IDR ${transaction.price * transaction.amount}`}
                    status="Pending"
                  />
                );
              })}
            </section>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default History;
