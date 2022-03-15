import React from "react";
import { IData, Info } from "../../interface/interface";
import styles from "./style.module.scss";

const Footer = ({ dataApi }: any) => {
  return (
    <div className={styles.WrappFooter}>
      <div className={styles.WrappFooterLink}>
        <div>
          <span>Charachters :{dataApi?.info?.count} </span>
          <span>Pages : {dataApi?.info?.pages} </span>
        </div>
        <div>
          <span>Server Status</span>
        </div>
        <div>
          <i>linkedin</i>
          <i>github</i>
        </div>
        <div>
          ❮❯ by <a href="#"> Erjus Stafa</a> {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
