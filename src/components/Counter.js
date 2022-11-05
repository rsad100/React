import React from "react";
import { connect } from "react-redux";
import styles from "../styles/Details.module.css";
import counterActions from "../redux/actions/counter";

function Counter({ counter, dispatch }) {
  const onClickHandler = (action) => {
    dispatch(action);
  };

  return (
    <div className={styles["aside-right-div-2"]}>
      <div
        className={styles["aside-right-div-3"]}
        onClick={() => onClickHandler(counterActions.counterDown())}
      >
        -
      </div>
      <div className={styles["aside-right-div-4"]}>{counter.number}</div>
      <div
        className={styles["aside-right-div-5"]}
        onClick={() => onClickHandler(counterActions.counterUp())}
      >
        +
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    counter: reduxState.counter,
  };
};

export default connect(mapStateToProps)(Counter);
