import React, { Component } from "react";
import styles from "../styles/Product.module.css";
import withNavigate from "../helpers/withNavigate";

class CardPromos extends Component {
  render() {
    return (
      <div
        className={`${styles[this.props.btn]} ${styles["size-1"]} ${
          styles["margin-1"]
        }`}
        onClick={() => {
          this.props.navigate(`/EditPromo/${this.props.keys}`);
        }}
      >
        <img
          className={styles["aside-left-image"]}
          src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${this.props.img}`}
          alt="img"
        />
        <section>
          <p className={`${styles["btn-text-1"]} ${styles["text-align-left"]}`}>
            {this.props.header}
          </p>
          <p className={styles["text-align-left"]}>{this.props.desc}</p>
        </section>
      </div>
    );
  }
}

const CardPromo = withNavigate(CardPromos);

export default CardPromo;
