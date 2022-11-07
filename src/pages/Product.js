import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import styles from "../styles/Product.module.css";
import jwt from "jwt-decode";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CardProduct from "../components/CardProduct";
import CardPromo from "../components/CardPromo";

import productActions from "../redux/actions/products";
import withNavigate from "../helpers/withNavigate";

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
      filter: "filter=Coffee",
      display: "block",
      sort: "&sort=cheap",
      limit: "&limit=12",
      page: "&page=1",
      // number: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url3 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?${this.state.filter}&keyword=${this.state.searchValue}${this.state.sort}`;
    this.props.dispatch(productActions.getProductAction(url3));
    // Axios.get(url3)
    //   .then((res) => {
    //     this.setState({
    //       products: res.data.result,
    //     });
    //     console.log(res.data.result);
    //   })
    //   .catch((err) => console.log(err));
    // console.log("lol");
  }

  componentDidMount() {
    document.title = "Products";
    const token = localStorage.getItem("token");

    if (token) {
      this.info = jwt(token);
      if (this.info.role === "admin") {
        this.setState({ display: "block" });
      } else this.setState({ display: "none" });
    }

    // console.log(this.info.role);
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Coffee${this.state.sort}${this.state.limit}${this.state.page}`;
    this.props.dispatch(productActions.getProductAction(url));
    const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/promos/`;
    Axios.get(url2)
      .then((res) => {
        this.setState({
          promos: res.data.result,
        });
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.searchValue);
    return (
      <body>
        <main className={styles["main"]}>
          <form onSubmit={this.handleSubmit}>
            <Nav
              home="nav-text"
              product="nav-text-2"
              your="nav-text"
              history="nav-text"
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
                        keys={promos.id_promo}
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
                  <h1 className={styles["header-term-header"]}>
                    Terms and condition
                  </h1>
                  <p className={styles["header-term-text"]}>
                    1. you can only apply 1 coupon per day
                  </p>
                  <p className={styles["header-term-text"]}>
                    2. It only for dine in
                  </p>
                  <p className={styles["header-term-text"]}>
                    3. Buy 1 get 1 only for new user
                  </p>
                  <p className={styles["header-term-text"]}>
                    4. Should make member card to apply coupon
                  </p>
                </section>
                <h1
                  style={{ display: this.state.display }}
                  className={styles["header-edit"]}
                >
                  Edit promo
                </h1>
                <h1
                  style={{ display: this.state.display }}
                  className={styles["header-edit"]}
                  onClick={() => {
                    this.props.navigate("/NewPromo");
                  }}
                >
                  Add new promo
                </h1>
              </aside>
              <aside className={styles["aside-right"]}>
                <nav className={styles["nav-center"]}>
                  <div className={styles[this.state.categoryFav]}>
                    <p
                      onClick={() => {
                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Fav${this.state.sort}${this.state.limit}${this.state.page}`;
                        this.setState({
                          categoryFav: "term-text-2",
                          categoryFoods: "term-text",
                          categoryCoffee: "term-text",
                          categoryNon: "term-text",
                          categoryAdd: "term-text",
                          filter: "filter=Fav",
                        });
                        this.props.dispatch(
                          productActions.getProductAction(url)
                        );
                      }}
                    >
                      Favorite & Promo
                    </p>
                  </div>
                  <p
                    className={styles[this.state.categoryCoffee]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Coffee${this.state.sort}${this.state.limit}${this.state.page}`;
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text-2",
                        categoryFoods: "term-text",
                        categoryNon: "term-text",
                        categoryAdd: "term-text",
                        filter: "filter=Coffee",
                      });
                      this.props.dispatch(productActions.getProductAction(url));
                    }}
                  >
                    Coffee
                  </p>
                  <p
                    className={styles[this.state.categoryNon]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Non${this.state.sort}${this.state.limit}${this.state.page}`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text",
                        categoryFoods: "term-text",
                        categoryNon: "term-text-2",
                        categoryAdd: "term-text",
                        filter: "filter=Non",
                      });
                    }}
                  >
                    Non Coffee
                  </p>
                  <p
                    className={styles[this.state.categoryFoods]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Food${this.state.sort}${this.state.limit}${this.state.page}`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text",
                        categoryFoods: "term-text-2",
                        categoryNon: "term-text",
                        categoryAdd: "term-text",
                        filter: "filter=Food",
                      });
                    }}
                  >
                    Foods
                  </p>
                  <p
                    className={styles[this.state.categoryAdd]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Add${this.state.sort}${this.state.limit}${this.state.page}`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text",
                        categoryFoods: "term-text",
                        categoryNon: "term-text",
                        categoryAdd: "term-text-2",
                        filter: "filter=Add",
                      });
                    }}
                  >
                    Add-on
                  </p>
                </nav>
                <nav className={styles["nav-2"]}>
                  <div
                    className={
                      this.state.sort === "&sort=pricey"
                        ? styles["nav-2-btn-2"]
                        : styles["nav-2-btn-1"]
                    }
                    onClick={() => {
                      this.setState({ sort: "&sort=pricey" });
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?${this.state.filter}&sort=pricey${this.state.limit}${this.state.page}`;
                      this.props.dispatch(productActions.getProductAction(url));
                    }}
                  ></div>
                  <p>Expensive</p>
                  <div
                    className={
                      this.state.sort === "&sort=cheap"
                        ? styles["nav-2-btn-2"]
                        : styles["nav-2-btn-1"]
                    }
                    onClick={() => {
                      this.setState({ sort: "&sort=cheap" });
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?${this.state.filter}&sort=cheap${this.state.limit}${this.state.page}`;
                      this.props.dispatch(productActions.getProductAction(url));
                    }}
                  ></div>
                  <p>Cheapest</p>
                </nav>
                <section className={styles["section-center-product"]}>
                  {this.props.products.isError && this.props.products.err}
                  {!this.props.products.isLoading
                    ? this.props.products.data.map((product) => {
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
                      })
                    : "Loading"}
                </section>
                <div className={styles["page-div"]}>
                  <div
                    className={styles["page-btn"]}
                    onClick={() => {
                      // this.setState({
                      //   page: `&page=1`,
                      //   number: this.state.number + 1,
                      // });
                      const url = `${process.env.REACT_APP_BACKEND_HOST}${this.props.products.previous}`;
                      this.props.dispatch(productActions.getProductAction(url));
                    }}
                  >
                    {"<"}
                  </div>
                  <div
                    className={styles["page-btn"]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}${this.props.products.next}`;
                      this.props.dispatch(productActions.getProductAction(url));
                      // console.log(this.props.products.next);
                    }}
                  >
                    {">"}
                  </div>
                </div>
                <p className={styles["center-disclaimer"]}>
                  *the price has been cutted by discount appears
                </p>
                <h1
                  style={{ display: this.state.display }}
                  className={styles["header-edit-2"]}
                >
                  Edit product
                </h1>
                <h1
                  style={{ display: this.state.display }}
                  className={styles["header-edit-3"]}
                  onClick={() => {
                    this.props.navigate("/NewProduct");
                  }}
                >
                  Add new product
                </h1>
              </aside>
            </section>
            <Footer />
          </form>
        </main>
      </body>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    products: reduxState.products,
  };
};

export default connect(mapStateToProps)(withNavigate(Product));
