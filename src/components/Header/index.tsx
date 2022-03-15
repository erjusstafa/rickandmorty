import React from 'react'
import styles from "./style.module.scss"
import image from "../../config/images"
const Header = () => {
  return (
    <div className={styles.WrappHeader}>
        <img src={image.logo} alt="" />
    </div>
  )
}

export default Header