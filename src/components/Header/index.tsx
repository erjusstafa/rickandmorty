import React from "react";
import styles from "./style.module.scss";
import image from "../../config/images";

function Header() {
  return (
    <div className={styles.WrappHeader}>
      <div className={styles.WrappHeaderContainer}>
        <div className={styles.WrappHeaderContainerLogo}>
          <img src={image.logo} alt="" />
          Logo
        </div>
        <div className={styles.WrappHeaderContainerLink}>
          <span>Docs</span>
          <span>About</span>
          <span id={styles.Help}>Help Us</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
