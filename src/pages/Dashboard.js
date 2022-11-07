import React, { Component } from "react";
import styles from "../styles/Dashboard.module.css";

import more from "../assets/more.png";
import person from "../assets/image 51.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import withNavigate from "../helpers/withNavigate";

class Dashboard extends Component {
  componentDidMount() {
    document.title = "Dashboard";
  }

  render() {
    return (
      <body>
        <main className={styles["main"]}>
          <form onSubmit={this.handleSubmit}>
            <Nav
              home="nav-text"
              product="nav-text"
              your="nav-text"
              history="nav-text-2"
            />
            <section className={styles["section-main"]}>
              <section>
                <h1 className={styles["section-1-header-1"]}>
                  See how your store progress so far
                </h1>
                <div className={styles["section-1-div-1"]}>
                  <div className={styles["section-1-div-2"]}>
                    <div className={styles["section-1-btn"]}></div>
                    <p className={styles["section-1-button-text-1"]}>Daily</p>
                  </div>
                  <div className={styles["section-1-div-2"]}>
                    <div className={styles["section-1-btn"]}></div>
                    <p className={styles["section-1-button-text-1"]}>Weekly</p>
                  </div>
                  <div className={styles["section-1-div-2"]}>
                    <div className={styles["section-1-btn"]}></div>
                    <p className={styles["section-1-button-text-1"]}>Monthly</p>
                  </div>
                </div>
              </section>
              <section className={styles["section-2"]}>
                <aside className={styles["aside-left-left"]}>
                  <aside className={styles["aside-left"]}>
                    <div className={styles["aside-left-header-div"]}>
                      <h1 className={styles["aside-left-header"]}>
                        Monthly Report
                      </h1>
                      <img
                        className={styles["header-more"]}
                        src={more}
                        alt="img"
                      />
                    </div>
                    <p className={styles["aside-left-text"]}>Last 6 months</p>
                    <section className={styles["section-2-chart"]}>
                      <aside className={styles["chart-left"]}>
                        <p>IDR 5M</p>
                        <p>IDR 3M</p>
                        <p>IDR 0K</p>
                        <p>-IDR 2M</p>
                      </aside>
                      <aside className={styles["chart-aside-right"]}>
                        <div className={styles["chart-aside-right-up"]}>
                          <div className={styles["bar-up-1"]}></div>
                          <div className={styles["bar-up-2"]}></div>
                          <div className={styles["bar-up-3"]}></div>
                          <div className={styles["bar-up-4"]}></div>
                          <div className={styles["bar-up-5"]}></div>
                          <div className={styles["bar-up-6"]}></div>
                        </div>
                        <div className={styles["chart-line"]}></div>
                        <div className={styles["chart-aside-right-down"]}>
                          <div className={styles["bar-down-1"]}></div>
                          <div className={styles["bar-down-2"]}></div>
                          <div className={styles["bar-down-3"]}></div>
                          <div className={styles["bar-down-4"]}></div>
                          <div className={styles["bar-down-5"]}></div>
                          <div className={styles["bar-down-6"]}></div>
                        </div>
                        <div className={styles["chart-month"]}>
                          <p className={styles["chart-month-text"]}>JAN</p>
                          <p className={styles["chart-month-text"]}>FEB</p>
                          <p className={styles["chart-month-text"]}>MAR</p>
                          <p className={styles["chart-month-text"]}>APR</p>
                          <p className={styles["chart-month-text"]}>MAY</p>
                          <p className={styles["chart-month-text"]}>JUN</p>
                        </div>
                      </aside>
                    </section>
                    <div className={styles["section-2-line"]}></div>
                    <div className={styles["section-2-div-last"]}>
                      <div className={styles["section-2-div-last-sub"]}>
                        <div className={styles["legend-btn-1"]}></div>
                        <p>Income</p>
                      </div>
                      <div className={styles["section-2-div-last-sub"]}>
                        <div className={styles["legend-btn-2"]}></div>
                        <p>Outcome</p>
                      </div>
                    </div>
                  </aside>{" "}
                  <div className={styles["share-btn"]}>Download Report</div>
                </aside>

                <aside>
                  <section className={styles["aside-right-section-1"]}>
                    <div className={styles["aside-right-section-1-div-1"]}>
                      <img
                        className={styles["profile-picture"]}
                        src={person}
                        alt="img"
                      />
                      <div>
                        <h1 className={styles["aside-right-section-1-header"]}>
                          Cheryn Laurent
                        </h1>
                        <p className={styles["aside-right-section-1-text"]}>
                          keep up the good work and spread love!
                        </p>
                      </div>
                    </div>
                    <div className={styles["aside-right-section-1-line"]}></div>
                    <div className={styles["aside-right-percentage-div"]}>
                      <h1 className={styles["aside-right-section-1-header-2"]}>
                        Best Staff of the Month
                      </h1>
                      <div
                        className={styles["aside-right-section-1-percentage"]}
                      >
                        100%
                      </div>
                      <p className={styles["aside-right-section-1-text"]}>
                        Achieved 3.5M of total 5M
                      </p>
                      <p className={styles["aside-right-section-1-text"]}>
                        478 Customer
                      </p>
                    </div>
                  </section>
                  <section className={styles["aside-right-section-2"]}>
                    <h1 className={styles["section-2-header"]}>Goals</h1>
                    <p className={styles["section-2-text"]}>
                      Your goals is still on 76%. Keep up the good work!
                    </p>
                    <div className={styles["section-2-percentage"]}>100%</div>
                    <div className={styles["section-2-circles"]}>
                      <div className={styles["section-2-circle-1"]}></div>
                      <div className={styles["section-2-circle-2"]}></div>
                      <div className={styles["section-2-circle-2"]}></div>
                    </div>
                  </section>
                  <div className={styles["share-btn"]}>Share Report</div>
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

export default withNavigate(Dashboard);
