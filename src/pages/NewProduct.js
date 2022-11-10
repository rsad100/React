import React, { Component, Fragment } from "react";
import styles from "../styles/NewProduct.module.css";
import Axios from "axios";
import jwt from "jwt-decode";

import photo from "../assets/photo.png";
// import chevronLeft from "../assets/line-left.png";
// import chevronRight from "../assets/line-right.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import withNavigate from "../helpers/withNavigate";
import withSearchParams from "../helpers/withSearchParams";

class NewProducts extends Component {
  constructor(props) {
    super(props);
    let params = new URL(document.location).searchParams;
    this.id = Number(params.get("id"));
    this.state = {
      image: undefined,
      file: "",
      // products: [],
      name: "",
      price: "",
      desc: "",
      size: "R, L, XL",
      delivery: "Home Delivery, Dine in, Take away",
      start: "",
      end: "",
      stock: "",
      category: "Coffee",
      sold: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Edit Product";
    const token = localStorage.getItem("token");
    this.info = jwt(token);

    // const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/`;
    // Axios.get(url)
    //   .then((res) => {
    //     this.setState({
    //       products: res.data.result,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }

  handleFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    // this.file = event.target.files[0];
    this.setState({
      file: event.target.files[0],
    });
    // console.log(this.state.file);
    // console.log(file.name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/products/`;
    let formdata = new FormData();
    console.log(this.state.name);
    formdata.append("image_product", this.state.file);
    formdata.append("name_product", this.state.name);
    formdata.append("price", this.state.price);
    formdata.append("desc_product", this.state.desc);
    formdata.append("size", this.state.size);
    formdata.append("delivery", this.state.delivery);
    formdata.append("starthours", this.state.start);
    formdata.append("endhours", this.state.end);
    formdata.append("stock", this.state.stock);
    formdata.append("category", this.state.category);
    formdata.append("sold", this.state.sold);

    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    const body = formdata;
    Axios.post(url, body)
      .then((res) => {
        console.log(res);
        this.props.navigate("/Product");
      })
      .catch((err) => console.log(err));
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  render() {
    // this.data = this.state.products.find((item) => item.id_product === this.id);
    // console.log(this.state.products);
    // console.log(this.id);

    // console.log(`value ${this.state.name}`);

    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main-1"]}>
            <Nav
              home="nav-text"
              product="nav-text"
              your="nav-text"
              history="nav-text"
            />
            <section className={styles["section-main"]}>
              <div className={styles["section-1"]}>
                <p className={styles["section-1-text-1"]}>Favorite & Promo</p>
                <p className={styles["section-1-text-2"]}>
                  {">"} Add new product
                </p>
              </div>
              <div className={styles["section-2"]}>
                <aside className={styles["aside-left"]}>
                  {this.state.image === undefined ? (
                    <div className={styles["aside-left-img"]}>
                      <img src={photo} alt="img" />
                    </div>
                  ) : (
                    <img
                      className={styles["aside-left-img-2"]}
                      src={this.state.image}
                      alt="img"
                    />
                  )}
                  <button className={styles["aside-left-button-1"]}>
                    Take a picture
                  </button>
                  <input
                    type="file"
                    name="file"
                    id="upload"
                    className={styles["none"]}
                    onChange={(event) => {
                      this.handleFile(event);
                    }}
                  />
                  <label for="upload" className={styles["aside-left-button-2"]}>
                    Choose from gallery
                  </label>
                  <h1 className={styles["aside-left-header-1"]}>
                    Delivery Hour :
                  </h1>
                  <div className={styles["dropdown"]}>
                    <input
                      className={styles["dropbtn"]}
                      type={"text"}
                      placeholder={"Type start hour"}
                      value={this.state.start}
                      onChange={(event) => this.handleChange(event, "start")}
                    ></input>
                  </div>
                  <div className={styles["dropdown"]}>
                    <input
                      className={styles["dropbtn"]}
                      type={"text"}
                      placeholder={"Type end hour"}
                      value={this.state.end}
                      onChange={(event) => this.handleChange(event, "end")}
                    ></input>
                  </div>
                  <h1 className={styles["aside-left-header-2"]}>
                    Input stock :
                  </h1>
                  <div className={styles["dropdown"]}>
                    <input
                      className={styles["dropbtn"]}
                      type={"text"}
                      placeholder={"Input stock"}
                      value={this.state.stock}
                      onChange={(event) => this.handleChange(event, "stock")}
                    ></input>
                  </div>
                </aside>
                <aside className={styles["aside-right"]}>
                  <h1 className={styles["aside-right-header-1"]}>Name :</h1>
                  <input
                    className={styles["aside-right-input-1"]}
                    type={"text"}
                    placeholder={"Type product name min.50 characters"}
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event, "name")}
                  ></input>
                  <h1 className={styles["aside-right-header-1"]}>Price :</h1>
                  <input
                    className={styles["aside-right-input-1"]}
                    type={"text"}
                    placeholder={"Type the price"}
                    value={this.state.price}
                    onChange={(event) => this.handleChange(event, "price")}
                  ></input>
                  <h1 className={styles["aside-right-header-1"]}>
                    Description :
                  </h1>
                  <input
                    className={styles["aside-right-input-1"]}
                    type={"text"}
                    placeholder={"Describe your product min.150 characters"}
                    value={this.state.desc}
                    onChange={(event) => this.handleChange(event, "desc")}
                  ></input>
                  <h1 className={styles["aside-right-header-1"]}>
                    Choose category :
                  </h1>
                  <p className={styles["aside-right-text-1"]}>
                    Click category you want to use for this product
                  </p>
                  <div className={styles["section-3"]}>
                    <button
                      className={
                        this.state.category === "Coffee"
                          ? styles["btn-size-1"]
                          : styles["btn-size-1-1"]
                      }
                      onClick={() => {
                        this.setState({
                          category: "Coffee",
                        });
                      }}
                    >
                      Coffee
                    </button>
                    <button
                      className={
                        this.state.category === "Non"
                          ? styles["btn-size-1"]
                          : styles["btn-size-1-1"]
                      }
                      onClick={() => {
                        this.setState({
                          category: "Non",
                        });
                      }}
                    >
                      Non Coffee
                    </button>
                    <button
                      className={
                        this.state.category === "Food"
                          ? styles["btn-size-1"]
                          : styles["btn-size-1-1"]
                      }
                      onClick={() => {
                        this.setState({
                          category: "Food",
                        });
                      }}
                    >
                      Foods
                    </button>
                    <button
                      className={
                        this.state.category === "Add"
                          ? styles["btn-size-1"]
                          : styles["btn-size-1-1"]
                      }
                      onClick={() => {
                        this.setState({
                          category: "Add",
                        });
                      }}
                    >
                      Add-on
                    </button>
                    {/* <button className={styles["btn-size-2"]}>250 gr</button>
                  <button className={styles["btn-size-2"]}>300 gr</button>
                  <button className={styles["btn-size-2"]}>500 gr</button> */}
                  </div>
                  {/* <h1 className={styles["aside-right-header-1"]}>
                  Input delivery methods :
                </h1>
                <p className={styles["aside-right-text-1"]}>
                  Click methods you want to use for this product
                </p>
                <div className={styles["section-4"]}>
                  <button className={styles["aside-right-btn-1"]}>
                    Home Delivery
                  </button>
                  <button className={styles["aside-right-btn-1"]}>
                    Dine in
                  </button>
                  <button className={styles["aside-right-btn-2"]}>
                    Take away
                  </button>
                </div> */}
                  <div className={styles["aside-right-div"]}>
                    <form onSubmit={this.handleSubmit}>
                      <button type="submit" className={styles["btn-save"]}>
                        Save Product
                      </button>
                    </form>
                    <button
                      className={styles["btn-cancel"]}
                      onClick={() => {
                        this.props.navigate("/product");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </aside>
              </div>
            </section>
            <Footer padding="202px" />
          </main>
        </main>
      </Fragment>
    );
  }
}

const NewProduct = withSearchParams(withNavigate(NewProducts));

export default NewProduct;
