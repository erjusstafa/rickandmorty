import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useReduxSelector } from "../../redux/hooks";
import Pagination from "../Pagination";
import styles from "./style.module.scss";

const Container = ({ dataApi, valSearch }: any | string) => {
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [itemsPerPage, setitemsPerPage] = useState<number>(5);
  const [pageNumberLimit, setpageNumberLimit] = useState<number>(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState<number>(0);

  const apiLength = dataApi?.results.length;

  const handleClick = (event: any) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(apiLength / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const renderPageNumbers = pages.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick}>
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className={styles.NumberList} onClick={handlePrevbtn}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }
  return (
    <div className={styles.WrappContainer}>
      <div className={styles.WrappContainerCards}>
        <div className={styles.Cards}>
          {Object.values(dataApi?.results || [])
            .filter((item: any) =>
              (
                item?.name.toLowerCase() &&
                item?.status.toLowerCase() &&
                item?.species.toLowerCase() &&
                item?.location?.name.toLowerCase()
              ).includes(valSearch.toLowerCase())
            )
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((item: any) => (
              <Link to={`/character/${item.id}`} key={item.id} className={styles.CardsItem}>
                <div className={styles.CardsItemImage}>
              <img src={item?.image} alt="" />
                  
                </div>
                <div className={styles.CardDescription}>
                  <h2>{item.name.length > 20 ? item.name.substring(0, 12) + "..." : item.name}</h2>
                  <div className={styles.CardDescriptionHuman}>
                    <p
                      style={{
                        height: "0.5rem",
                        width: "0.5rem",
                        marginRight: "0.375rem",
                        borderRadius: "50%",
                        display: "flex",
                        backgroundColor: item?.status === "Alive" ? "green" : item.status === "Dead" ? "red" : "gray",
                      }}
                    ></p>
                    <h3>{item.status + " - " + item.species}</h3>{" "}
                  </div>
                  <br />
                  <p className={styles.cardItemText}>Last known location:</p>
                  <p className={styles.cardItemTextLocation}>{item.location.name}</p>
                  <br />
                  <p className={styles.cardItemText}>Created:</p>
                  <p className={styles.cardItemTextLocation}>{item.created}</p>
                </div>
              </Link>
            ))}
        </div>

        <Pagination
          handlePrevbtn={handlePrevbtn}
          currentPage={currentPage}
          pages={pages}
          pageDecrementBtn={pageDecrementBtn}
          renderPageNumbers={renderPageNumbers}
          pageIncrementBtn={pageIncrementBtn}
          handleNextbtn={handleNextbtn}
        />
      </div>
    </div>
  );
};

export default Container;
