import React from "react";
import styles from "./style.module.scss";

const Container = ({ dataApi }: any) => {
  return (
    <div className={styles.WrappContainer}>
      <div className={styles.WrappContainerCards}>
        <div className={styles.Cards}>
          {Object.values(dataApi?.results || []).map((item: any) => (
            <div className={styles.CardsItem}>
              <div className={styles.CardsItemImage}>
                <img src={item?.image} alt="" />
              </div>
              <div className={styles.CardDescription}>
                <h2>{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
