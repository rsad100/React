import React, { Component, Fragment } from "react";
import styles from "../styles/Home.module.css";

import person from "../assets/person.png";
import location from "../assets/location.png";
import heart from "../assets/heart.png";
import section3Img from "../assets/section-3-img.png";
import check from "../assets/check.png";
import hazelnut from "../assets/hazelnut-latte.png";
import check2 from "../assets/check-2.png";
import pinky from "../assets/pinky-promise.png";
import chicken from "../assets/chicken-wings.png";
import world from "../assets/world-map.png";
import netflix from "../assets/netflix.png";
import reddit from "../assets/reddit.png";
import amazon from "../assets/amazon.png";
import discord from "../assets/discord.png";
import spotify from "../assets/spotify.png";
import vienzh from "../assets/vienzh.png";
import star from "../assets/star.png";
import yessica from "../assets/yessica.png";
import kim from "../assets/kim.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Fragment>
        <body>
          <main className={styles["container-fluid"]}>
            <section className={styles["row"]}>
              <Nav />
            </section>
            <section className={styles["row"]}>
              <div className={`${styles["section-2"]} ${styles["col-sm"]}`}>
                <h1 className={styles["section-2-header"]}>
                  Start Your Day with Coffee and Good Meals
                </h1>
                <p className={styles["section-2-text"]}>
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. start your day with us for a bigger
                  smile!
                </p>
                <section className={styles["btn-yellow"]}>
                  <p className={styles["btn-yellow-text"]}>Get Started</p>
                </section>
                <section className={styles["section-2-sub"]}>
                  <div className={styles["section-2-sub-header"]}>
                    <div className={styles["section-2-icon"]}>
                      <img
                        className={styles["section-2-img"]}
                        src={[person]}
                        alt="person"
                      />
                    </div>
                    <div>
                      <p className={styles["section-2-text-1"]}>90+</p>
                      <p className={styles["section-2-text-2"]}>Staff</p>
                    </div>
                  </div>
                  <div className={styles["section-2-sub-header"]}>
                    <div className={styles["section-2-icon"]}>
                      <img
                        className={styles["section-2-img-2"]}
                        src={location}
                        alt="location"
                      />
                    </div>
                    <div>
                      <p className={styles["section-2-text-1"]}>30+</p>
                      <p className={styles["section-2-text-2"]}>Stories</p>
                    </div>
                  </div>
                  <div className={styles["section-2-sub-header"]}>
                    <div className={styles["section-2-icon"]}>
                      <img
                        className={styles["section-img-3"]}
                        src={heart}
                        alt="heart"
                      />
                    </div>
                    <div>
                      <p className={styles["section-2-text-1"]}>800+</p>
                      <p className={styles["section-2-text-2"]}>Customers</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
            <section className={styles["row"]}>
              <div className={`${styles["col-sm"]} ${styles["section-3"]}`}>
                <img
                  className={styles["section-3-img"]}
                  src={section3Img}
                  alt="section-3-img"
                />
                <section>
                  <h1 className={styles["section-3-header"]}>
                    We Provide Good Coffee and Healthy Meals
                  </h1>
                  <p className={styles["section-3-txt-1"]}>
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div className={styles["section-3-list"]}>
                    <img
                      className={styles["section-3-img-2"]}
                      src={check}
                      alt="check"
                    />
                    <p className={styles["section-3-txt-1"]}>
                      High quality beans
                    </p>
                  </div>
                  <div className={styles["section-3-list"]}>
                    <img
                      className={styles["section-3-img-2"]}
                      src={check}
                      alt="check"
                    />
                    <p className={styles["section-3-txt-1"]}>
                      Healthy meals, you can request the ingredients
                    </p>
                  </div>
                  <div className={styles["section-3-list"]}>
                    <img
                      className={styles["section-3-img-2"]}
                      src={check}
                      alt="check"
                    />
                    <p className={styles["section-3-txt-1"]}>
                      Chat with our staff to get better experience for ordering
                    </p>
                  </div>
                  <div className={styles["section-3-list"]}>
                    <img
                      className={styles["section-3-img-2"]}
                      src={check}
                      alt="check"
                    />
                    <p className={styles["section-3-txt-1"]}>
                      Free member card with minimum purchase of IDR 200.000.
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <section className={styles["row"]}>
              <div className={`${styles["col-sm"]} ${styles["section-4"]}`}>
                <h1 className={styles["section-4-header"]}>
                  Here is People's Favorite
                </h1>
                <p className={styles["section-4-header-text"]}>
                  Let's choose and have a bit taste of people's favorite. it
                  might be yours too!
                </p>
                <section className={styles["section-4-sub"]}>
                  <div className={styles["section-4-box"]}>
                    <img
                      className={styles["section-4-img"]}
                      src={hazelnut}
                      alt="hazelnut"
                    />
                    <h1 className={styles["section-4-box-header"]}>
                      hazelnut Latte
                    </h1>
                    <div className={styles["section-4-list-div"]}>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          HazelnutSyrup
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Wanilla Whipped Cream
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Ice / Hot
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Sliced Banana on Top
                        </p>
                      </div>
                    </div>
                    <p className={styles["section-4-price"]}>IDR 25.000</p>
                    <div className={styles["section-4-btn"]}>
                      <p className={styles["section-4-btn-text"]}>Order Now</p>
                    </div>
                  </div>
                  <div className={styles["section-4-box"]}>
                    <img
                      className={styles["section-4-img"]}
                      src={pinky}
                      alt="pinky-promise"
                    />
                    <h1 className={styles["section-4-box-header"]}>
                      Pinky Promise
                    </h1>
                    <div className={styles["section-4-list-div"]}>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          1 Shot of Coffee
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Vanilla Whipped Cream
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Chocolate Biscuits
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Strawberry Syrup
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Sliced strawberry on Top
                        </p>
                      </div>
                    </div>
                    <p className={styles["section-4-price"]}>IDR 30.000</p>
                    <div className={styles["section-4-btn"]}>
                      <p className={styles["section-4-btn-text"]}>Order Now</p>
                    </div>
                  </div>
                  <div className={styles["section-4-box"]}>
                    <img
                      className={styles["section-4-img"]}
                      src={chicken}
                      alt="chicken-wings"
                    />
                    <h1 className={styles["section-4-box-header"]}>
                      Chicken Wings
                    </h1>
                    <div className={styles["section-4-list-div"]}>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>Wings</p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Drum Sticks
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Mayonaise and Lemon
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Hot Fried
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Secret Recipe
                        </p>
                      </div>
                      <div className={styles["section-4-list"]}>
                        <img
                          className={styles["section-4-img-2"]}
                          src={check2}
                          alt="check-2"
                        />
                        <p className={styles["section-4-list-text"]}>
                          Buy 1 Get 1 Only for Dine in
                        </p>
                      </div>
                    </div>
                    <p className={styles["section-4-price"]}>IDR 25.000</p>
                    <div className={styles["section-4-btn"]}>
                      <p className={styles["section-4-btn-text"]}>Order Now</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
            <section className={styles["row"]}>
              <div className={`${styles["col-sm"]} ${styles["section-5"]}`}>
                <h1 className={styles["section-5-header"]}>
                  Visit Our Store in the Spot on the map below
                </h1>
                <p className={styles["section-5-header-text"]}>
                  See our store in every city on the spot and spen your good day
                  there. See you soon!
                </p>
                <img
                  className={styles["section-5-img"]}
                  src={world}
                  alt="world-map"
                />
              </div>
            </section>
            <section className={styles["row"]}>
              <div className={`${styles["col-sm"]} ${styles["section-6"]}`}>
                <h1>Our Partner</h1>
                <div className={styles["section-6-img"]}>
                  <img
                    className={styles["section-6-img-1"]}
                    src={netflix}
                    alt="netflix"
                  />
                  <img
                    className={styles["section-6-img-1"]}
                    src={reddit}
                    alt="reddit"
                  />
                  <img
                    className={styles["section-6-img-1"]}
                    src={amazon}
                    alt="amazon"
                  />
                  <img
                    className={styles["section-6-img-1"]}
                    src={discord}
                    alt="discord"
                  />
                  <img
                    className={styles["section-6-img-1"]}
                    src={spotify}
                    alt="spotify"
                  />
                </div>
              </div>
            </section>
            <section className={styles["row"]}>
              <div className={`${styles["col-sm"]} ${styles["section-7"]}`}>
                <h1 className={styles["section-7-header"]}>
                  Loved by Thousands of Happy Customer
                </h1>
                <p className={styles["section-7-header-text"]}>
                  These are the stories of our customers who have visited us
                  with great pleasure.
                </p>
                <div className={styles["section-7-comments"]}>
                  <div className={styles["section-7-comment"]}>
                    <div className={styles["section-7-comment-top"]}>
                      <img
                        className={styles["section-7-image"]}
                        src={vienzh}
                        alt="vienzh"
                      />
                      <div className={styles["section-7-comment-top-middle"]}>
                        <h1 className={styles["section-7-comment-header"]}>
                          Vienzh Robert
                        </h1>
                        <p className={styles["section-7-comment-text-1"]}>
                          Warsaw, Poland
                        </p>
                      </div>
                      <div className={styles["section-7-rating"]}>
                        <p className={styles["section-7-comment-text-3"]}>
                          4.5
                        </p>
                        <img
                          className={styles["section-7-image-2"]}
                          src={star}
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className={styles["section-7-comment-text-2"]}>
                      "Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good. and the cofee and meats tho. I like it
                      here!! Very recommended
                    </p>
                  </div>
                  <div className={styles["section-7-comment"]}>
                    <div className={styles["section-7-comment-top"]}>
                      <img
                        className={styles["section-7-image"]}
                        src={yessica}
                        alt="yessica"
                      />
                      <div className={styles["section-7-comment-top-middle"]}>
                        <h1 className={styles["section-7-comment-header"]}>
                          Yessica Christy
                        </h1>
                        <p className={styles["section-7-comment-text-1"]}>
                          Shanxi, China
                        </p>
                      </div>
                      <div className={styles["section-7-rating"]}>
                        <p className={styles["section-7-comment-text-3"]}>
                          4.5
                        </p>
                        <img
                          className={styles["section-7-image-2"]}
                          src={star}
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className={styles["section-7-comment-text-2"]}>
                      "I like it because I like to travel far and still can make
                      my day better just by drinking their Hazelnut Latte
                    </p>
                  </div>
                  <div className={styles["section-7-comment"]}>
                    <div className={styles["section-7-comment-top"]}>
                      <img
                        className={styles["section-7-image"]}
                        src={kim}
                        alt="kim"
                      />
                      <div className={styles["section-7-comment-top-middle"]}>
                        <h1 className={styles["section-7-comment-header"]}>
                          Kim Young Jou
                        </h1>
                        <p className={styles["section-7-comment-text-1"]}>
                          Seoul, South Korea
                        </p>
                      </div>
                      <div className={styles["section-7-rating"]}>
                        <p className={styles["section-7-comment-text-3"]}>
                          4.5
                        </p>
                        <img
                          className={styles["section-7-image-2"]}
                          src={star}
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className={styles["section-7-comment-text-2"]}>
                      "Tis is very unusual for my taste. I haven't liked cofee
                      before but their coffee is the best! and yup, you have to
                      order the chicken wings, the best in town!
                    </p>
                  </div>
                </div>
                <section className={styles["section-7-navigator"]}>
                  <div className={styles["section-7-selector"]}>
                    <div className={styles["section-7-button-1"]}></div>
                    <div className={styles["section-7-button-2"]}></div>
                    <div className={styles["section-7-button-2"]}></div>
                    <div className={styles["section-7-button-2"]}></div>
                  </div>
                  <div className={styles["section-7-arrows"]}>
                    <div className={styles["section-7-button-round-1"]}>
                      <img
                        className={styles["section-7-image-3"]}
                        src={arrowLeft}
                        alt="arrow-left"
                      />
                    </div>
                    <div className={styles["section-7-button-round-2"]}>
                      <img
                        className={styles["section-7-image-3"]}
                        src={arrowRight}
                        alt="arrow-right"
                      />
                    </div>
                  </div>
                </section>
                <section className={styles["section-7-sub"]}>
                  <div>
                    <h1 className={styles["section-7-sub-header"]}>
                      Check our promo today!
                    </h1>
                    <p className={styles["section-7-sub-text"]}>
                      Let's see the deals and pick yours!
                    </p>
                  </div>
                  <div className={styles["section-7-sub-button"]}>
                    <p className={styles["section-7-sub-button-text"]}>
                      See Promo
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <section className={styles["row"]}>
              <Footer padding="176px" />
            </section>
          </main>
        </body>
      </Fragment>
    );
  }
}

export default Home;
