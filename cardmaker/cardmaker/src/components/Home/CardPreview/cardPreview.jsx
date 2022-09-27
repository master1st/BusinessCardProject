import React from "react";
import styles from "./cardPreview.module.css";
import Card from "../card/card";
const CardPreview = (props) => {
  console.log(props.carddata);
  const cards = props.carddata;
  return (
    <section className={styles.box}>
      <h1>Card Preview</h1>
      <div>
      {cards.map((card) => 
        <div key={card.id}>
          <Card card={card}/>
        </div>
      )}
      </div>
    </section>
  );
};

export default CardPreview;
