import React, { ChangeEvent, useState } from "react";
import { ITitle } from "../../interface/interface";
import styles from "./style.module.scss";

function Section({ title }: ITitle) {
  const [valSearch, setValSearch] = useState<string>("");

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
