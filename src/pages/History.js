import React, { Component, Fragment } from "react";
import styles from "../styles/History.module.css";

import veggie from "../assets/image 2.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CardHistory from "../components/CardHistory";

class History extends Component {
  componentDidMount() {
    document.title = "History";
  }

  render() {
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
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
              <CardHistory
                img={veggie}
                name="Veggie tomato mix"
                price="IDR 34.000"
                status="Delivered"
              />
            </section>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default History;
