import React from "react";
import styles from "../styles/Profile.module.css";

import coffee from "../assets/coffee 1.png";
import facebook from "../assets/facebook-vector.png";
import twitter from "../assets/twitter-vector.png";
import instagram from "../assets/instagram-vector.png";

function Footer(props) {
  return (
    <footer className={styles["footer"]} style={{ paddingTop: props.padding }}>
      <aside>
        <div className={styles["footer-header"]}>
          <img
            className={styles["footer-image-1"]}
            src={coffee}
            alt="coffee 1"
          />
          <h1 className={styles["footer-header-1"]}>Coffee Shop</h1>
        </div>
        <p className={styles["footer-text-1"]}>
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
        <div className={styles["footer-image"]}>
          <img
            className={styles["footer-image-2"]}
            src={facebook}
            alt="facebook"
          />
          <img
            className={styles["footer-image-2"]}
            src={twitter}
            alt="twitter"
          />
          <img
            className={styles["footer-image-2"]}
            src={instagram}
            alt="instagram"
          />
        </div>
        <p className={styles["footer-text-3"]}>©2020CoffeeStore</p>
      </aside>
      <aside className={styles["footer-aside"]}>
        <aside>
          <h1 className={styles["footer-header-2"]}>Product</h1>
          <p className={styles["footer-text-2"]}>Download</p>
          <p className={styles["footer-text-2"]}>Pricing</p>
          <p className={styles["footer-text-2"]}>Locations</p>
          <p className={styles["footer-text-2"]}>Countries</p>
          <p className={styles["footer-text-2"]}>Blog</p>
        </aside>
        <aside>
          <h1 className={styles["footer-header-2"]}>Engage</h1>
          <p className={styles["footer-text-2"]}>Coffe Shop?</p>
          <p className={styles["footer-text-2"]}>FAQ</p>
          <p className={styles["footer-text-2"]}>About Us</p>
          <p className={styles["footer-text-2"]}>Privacy Policy</p>
          <p className={styles["footer-text-2"]}>Terms of Service</p>
        </aside>
      </aside>
    </footer>
  );
}

export default Footer;
