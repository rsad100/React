import React from "react";
import styles from "../styles/Product.module.css";

function CardPromo(props) {
  return (
    <div
      className={`${styles[props.btn]} ${styles["size-1"]} ${
        styles["margin-1"]
      }`}
    >
      <img
        className={styles["aside-left-image"]}
        src={`http://localhost:8080/${props.img}`}
        alt="img"
      />
      <section>
        <p className={`${styles["btn-text-1"]} ${styles["text-align-left"]}`}>
          {props.header}
        </p>
        <p className={styles["text-align-left"]}>{props.desc}</p>
      </section>
    </div>
  );
}

export default CardPromo;