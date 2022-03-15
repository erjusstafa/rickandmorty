import React from "react";
import styles from "./style.module.scss";
import image from "../../config/images";

function Header() {
  return (
    <div className={styles.WrappHeader}>
      <div className={styles.WrappHeaderContainer}>
        <div className={styles.WrappHeaderContainerLogo}>
          <img src={image.logo} alt="" />
          Lofo
        </div>
        <div className={styles.WrappHeaderContainerLink}>
          <span>Docs</span>
          <span>About</span>
          <span>Help Us</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
