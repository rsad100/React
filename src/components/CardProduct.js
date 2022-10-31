import React, { Component } from "react";
import styles from "../styles/Product.module.css";
import withNavigate from "../helpers/withNavigate";

class CardProducts extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className={styles["item"]}
        onClick={() => {
          this.props.navigate(`/details/?id=${this.props.keys}`, {
            state: {
              name: this.props.name,
              img: this.props.img,
              price: this.props.price,
              desc: this.props.desc,
            },
          });
        }}
      >
        <div className={styles["div-image"]}>
          <img
            className={styles["item-image"]}
            src={`http://localhost:8080/${this.props.img}`}
            alt="img"
          />
          {/* <div className={styles["discount-div"]}>
          <p className={styles["discount"]}>10%</p>
        </div> */}
        </div>
        <p className={styles["product-text"]}>{this.props.name}</p>
        <p className={styles["price-text"]}>{this.props.price}</p>
      </div>
    );
  }
}

const CardProduct = withNavigate(CardProducts);

export default CardProduct;
