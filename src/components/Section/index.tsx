import React, { ChangeEvent } from "react";
import { ISection } from "../../interface/interface";
import styles from "./style.module.scss";

function Section({ title, valSearch, setValSearch }: ISection) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValSearch(event.target.value);
  };
  return (
    <div className={styles.WrappPreview}>
      <div className={styles.WrappPreviewTitle}>
        <h1>{title}</h1>

        <input
          type="text"
          value={valSearch}
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Section;
