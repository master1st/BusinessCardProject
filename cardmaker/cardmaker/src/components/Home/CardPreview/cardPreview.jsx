import React from "react";
import styles from "./cardPreview.module.css";

const CardPreview = (props) => {
  console.log(props);
  return (
    <section className={styles.box}>
      <h1>Card Preview</h1>
    </section>
  );
};

export default CardPreview;
