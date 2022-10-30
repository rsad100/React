import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/Details.module.css";

import arrowRight from "../assets/arrow-right-2.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Details() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Fragment>
      <main>
        <Nav />
        <section className={styles["section-center-main"]}>
          <section className={styles["section-center-1"]}>
            <p>Favorite & Promo</p>
            <p>
              {">"} {state.name}
            </p>
          </section>
          <section className={styles["section-center-2"]}>
            <img
              className={styles["aside-left-img"]}
              src={`http://localhost:8080/${state.img}`}
              alt="cold"
            />
            <aside>
              <h1 className={styles["aside-right-header"]}>{state.name}</h1>
              <p className={styles["aside-right-text-1"]}>{state.desc}</p>
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
                    <p className={styles["aside-left-text-2"]}>Door Delivery</p>
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
                <div className={styles["aside-right-div-2"]}>
                  <div className={styles["aside-right-div-3"]}>-</div>
                  <div className={styles["aside-right-div-4"]}>2</div>
                  <div className={styles["aside-right-div-5"]}>+</div>
                </div>
                <p className={styles["aside-right-text-3"]}>{state.price}</p>
              </div>
              <div className={styles["aside-right-div-6"]}>Add to Cart</div>
              <div className={styles["aside-right-div-7"]}>Ask a Staff</div>
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
                    src={`http://localhost:8080/${state.img}`}
                    alt="cold"
                  />
                  <div>
                    <h1 className={styles["section-3-header-1"]}>COLD BREW</h1>
                    <p className={styles["section-3-text-2"]}>x1 (Large)</p>
                    <p className={styles["section-3-text-2"]}>x1 (Regular)</p>
                  </div>
                </div>
                <div className={styles["section-3-div-4"]}>
                  <p className={styles["section-3-text-3"]}>Checkout</p>
                  <div className={styles["section-3-circle"]}>
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

export default Details;