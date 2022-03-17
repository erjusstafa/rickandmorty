import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/api";
import styles from "./style.module.scss";

function PageDetails() {
  const { id } = useParams();
  const [charData, setCharData] = useState<any>([]);

  const fetchCharData = async () => {
    const data = await fetch(`${API_URL}/${id}`);
    const getData = await data.json();
    setCharData(getData);
  };

  console.log("charData", charData);
  useEffect(() => {
    fetchCharData();
  }, [charData.id]);

  return (
    <div className={styles.CardsItem}>
      <div className={styles.CardsItemImage}>
        <img src={charData?.image} alt="" />
      </div>
      <div className={styles.CardDescription}>
        <h2>{charData.name.length > 20 ? charData.name.substring(0, 12) + "..." : charData.name}</h2>
        <div className={styles.CardDescriptionHuman}>
          <p
            style={{
              height: "0.5rem",
              width: "0.5rem",
              marginRight: "0.375rem",
              borderRadius: "50%",
              display: "flex",
              backgroundColor: charData?.status === "Alive" ? "green" : charData.status === "Dead" ? "red" : "gray",
            }}
          ></p>
          <h3>{charData.status + " - " + charData.species}</h3>{" "}
        </div>
        <br />
        <p className={styles.cardItemText}>Last known location:</p>
        <p className={styles.cardItemTextLocation}>{charData.location.name}</p>
        <br />
        <p className={styles.cardItemText}>Created:</p>
        <p className={styles.cardItemTextLocation}>{charData.created}</p>
      </div>
    </div>
  );
}

export default PageDetails;
