import React, { ReactElement } from "react";
import styles from "./style.module.scss";

function Pagination({
  handlePrevbtn,
  handleNextbtn,
  currentPage,
  pages,
  pageDecrementBtn,
  renderPageNumbers,
  pageIncrementBtn,
}: any): ReactElement {
  return (
    <div className={styles.WrappPagination}>
      <ul className={styles.pageNumbers}>
        <li>
          <button onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false}>
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button onClick={handleNextbtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
