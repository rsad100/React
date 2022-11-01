import React, { Component } from "react";
import Axios from "axios";
import styles from "../styles/Product.module.css";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CardProduct from "../components/CardProduct";
import CardPromo from "../components/CardPromo";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      promos: [],
      categoryFav: "term-text",
      categoryFoods: "term-text",
      categoryCoffee: "term-text-2",
      categoryNon: "term-text",
      categoryAdd: "term-text",
      searchValue: "",
      filter: "Coffee",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event) {
    const url3 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=${this.state.filter}&keyword=${this.state.searchValue}`;
    Axios.get(url3)
      .then((res) => {
        this.setState({
          products: res.data.result,
        });
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
    event.preventDefault();
  }

  componentDidMount() {
    document.title = "Payment";
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Coffee`;
    const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/promos/`;
    Axios.get(url2)
      .then((res) => {
        this.setState({
          promos: res.data.result,
        });
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
    Axios.get(url)
      .then((res) => {
        this.setState({
          products: res.data.result,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <body>
        <main className={styles["main"]}>
          <form onSubmit={this.handleSubmit}>
            <Nav
              searchValue={this.state.searchValue}
              handleChange={this.handleChange}
            />
            <section className={styles["section-center"]}>
              <aside className={styles["aside-left"]}>
                <div>
                  <h1 className={styles["aside-left-header"]}>Promo Today</h1>
                  <p className={styles["aside-left-text"]}>
                    Coupons will be updated every weeks, Check them out!
                  </p>
                </div>
                <div className={styles["aside-left-buttons"]}>
                  {this.state.promos.map((promos) => {
                    return (
                      <CardPromo
                        btn="btn-green"
                        img={promos.image_promo}
                        header={promos.name_promo}
                        desc={`${promos.desc_promo}`}
                      />
                    );
                  })}
                </div>
                <div
                  className={`${styles["btn-apply"]} ${styles["size-1"]} ${styles["margin-2"]}`}
                >
                  <p
                    className={`${styles["btn-text-1"]} ${styles["text-align-left"]}`}
                  >
                    Apply Coupon
                  </p>
                </div>
                <section className={styles["header-term"]}>
                  <h1 className="">Terms and condition</h1>
                  <p>1. you can only apply 1 coupon per day</p>
                  <p>2. It only for dine in</p>
                  <p>3. Buy 1 get 1 only for new user</p>
                  <p>4. Should make member card to apply coupon</p>
                </section>
              </aside>
              <aside className={styles["aside-right"]}>
                <nav className={styles["nav-center"]}>
                  <p
                    className={styles[this.state.categoryFav]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Fav`;
                      Axios.get(url)
                        .then((res) => {
                          this.setState({
                            categoryFav: "term-text-2",
                            categoryFoods: "term-text",
                            categoryCoffee: "term-text",
                            categoryNon: "term-text",
                            categoryAdd: "term-text",
                            filter: "Fav",
                            products: res.data.result,
                          });
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Favorite & Promo
                  </p>
                  <p
                    className={styles[this.state.categoryCoffee]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Coffee`;
                      Axios.get(url)
                        .then((res) => {
                          this.setState({
                            categoryFav: "term-text",
                            categoryCoffee: "term-text-2",
                            categoryFoods: "term-text",
                            categoryNon: "term-text",
                            categoryAdd: "term-text",
                            filter: "Coffee",
                            products: res.data.result,
                          });
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Coffee
                  </p>
                  <p
                    className={styles[this.state.categoryNon]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Non`;
                      Axios.get(url)
                        .then((res) => {
                          this.setState({
                            categoryFav: "term-text",
                            categoryCoffee: "term-text",
                            categoryFoods: "term-text",
                            categoryNon: "term-text-2",
                            categoryAdd: "term-text",
                            filter: "Non",
                            products: res.data.result,
                          });
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Non Coffee
                  </p>
                  <p
                    className={styles[this.state.categoryFoods]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Food`;
                      Axios.get(url)
                        .then((res) => {
                          this.setState({
                            categoryFav: "term-text",
                            categoryCoffee: "term-text",
                            categoryFoods: "term-text-2",
                            categoryNon: "term-text",
                            categoryAdd: "term-text",
                            filter: "Food",
                            products: res.data.result,
                          });
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Foods
                  </p>
                  <p
                    className={styles[this.state.categoryAdd]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Add`;
                      Axios.get(url)
                        .then((res) => {
                          this.setState({
                            categoryFav: "term-text",
                            categoryCoffee: "term-text",
                            categoryFoods: "term-text",
                            categoryNon: "term-text",
                            categoryAdd: "term-text-2",
                            filter: "Add",
                            products: res.data.result,
                          });
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Add-on
                  </p>
                </nav>
                <section className={styles["section-center-product"]}>
                  {this.state.products.map((product) => {
                    // console.log(product);
                    return (
                      <CardProduct
                        img={product.image_product}
                        name={product.name_product}
                        price={`IDR ${product.price}`}
                        keys={product.id_product}
                        desc={product.desc_product}
                      />
                    );
                  })}
                </section>
                <p className={styles["center-disclaimer"]}>
                  *the price has been cutted by discount appears
                </p>
              </aside>
            </section>
            <Footer />
          </form>
        </main>
      </body>
    );
  }
}

export default Product;
