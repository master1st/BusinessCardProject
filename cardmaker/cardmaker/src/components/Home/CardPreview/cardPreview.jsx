import React from "react";
import styles from "./cardPreview.module.css";
import Card from "../card/card";
const CardPreview = (props) => {
  console.log(props);
  return (
    <section className={styles.box}>
      <h1>Card Preview</h1>
      <Card props={props}/>
    </section>
  );
};

export default CardPreview;
