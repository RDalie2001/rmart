import React from "react";
import styles from "./Header.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className={styles.header}>
      {/* Logo */}

      <div className={styles['nav-items']}>
        {/* Home */}
        <button className={styles["nav-button"]}>Home</button>
        {/* Browse */}
        <button className={styles["nav-button"]}>Browse</button>
        {/* Orders */}
        <button className={styles["nav-button"]}>Orders</button>
        {/* Sign In */}
        <button className={styles["nav-button"]}>Sign In</button>
        {/* Shopping Cart Icon */}
        <button className={styles["nav-button"]}>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#ffffff", fontSize: 30 }}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
