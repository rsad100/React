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
      filter: "Coffee",
      display: "block",
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
    document.title = "Products";
    const token = localStorage.getItem("token");

    if (token) {
      this.info = jwt(token);
      if (this.info.role === "admin") {
        this.setState({ display: "block" });
      } else this.setState({ display: "none" });
    }

    // console.log(this.info.role);
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Coffee`;
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
    console.log(this.props.products.data);
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
                >
                  Add new promo
                </h1>
              </aside>
              <aside className={styles["aside-right"]}>
                <nav className={styles["nav-center"]}>
                  <div className={styles[this.state.categoryFav]}>
                    <p
                      onClick={() => {
                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Fav`;
                        this.props.dispatch(
                          productActions.getProductAction(url)
                        );
                        this.setState({
                          categoryFav: "term-text-2",
                          categoryFoods: "term-text",
                          categoryCoffee: "term-text",
                          categoryNon: "term-text",
                          categoryAdd: "term-text",
                          filter: "Fav",
                        });
                      }}
                    >
                      Favorite & Promo
                    </p>
                  </div>
                  <p
                    className={styles[this.state.categoryCoffee]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Coffee`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text-2",
                        categoryFoods: "term-text",
                        categoryNon: "term-text",
                        categoryAdd: "term-text",
                        filter: "Coffee",
                      });
                    }}
                  >
                    Coffee
                  </p>
                  <p
                    className={styles[this.state.categoryNon]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Non`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text",
                        categoryFoods: "term-text",
                        categoryNon: "term-text-2",
                        categoryAdd: "term-text",
                        filter: "Non",
                      });
                    }}
                  >
                    Non Coffee
                  </p>
                  <p
                    className={styles[this.state.categoryFoods]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Food`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text",
                        categoryFoods: "term-text-2",
                        categoryNon: "term-text",
                        categoryAdd: "term-text",
                        filter: "Food",
                      });
                    }}
                  >
                    Foods
                  </p>
                  <p
                    className={styles[this.state.categoryAdd]}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/?filter=Add`;
                      this.props.dispatch(productActions.getProductAction(url));
                      this.setState({
                        categoryFav: "term-text",
                        categoryCoffee: "term-text",
                        categoryFoods: "term-text",
                        categoryNon: "term-text",
                        categoryAdd: "term-text-2",
                        filter: "Add",
                      });
                    }}
                  >
                    Add-on
                  </p>
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
