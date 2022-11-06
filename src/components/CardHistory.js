import React from "react";
import styles from "../styles/History.module.css";

function CardHistory(props) {
  return (
    <div className={styles["section-center-div"]}>
      <img
        className={styles["section-center-div-image"]}
        src={`https://res.cloudinary.com/dr6hbaq0j/image/upload/v1667258032${props.img}`}
        alt="img"
      />
      <div>
        <div className={styles["card-div-top"]}>
          <p className={styles["section-center-div-text-1"]}>{props.name}</p>
          <p className={styles["section-center-div-text-1"]}>x{props.amount}</p>
        </div>
        <p className={styles["section-center-div-text-2"]}>{props.price}</p>
        <p className={styles["section-center-div-text-2"]}>{props.status}</p>
      </div>
      <div className={styles["section-center-div-check"]}></div>
    </div>
  );
}

export default CardHistory;
