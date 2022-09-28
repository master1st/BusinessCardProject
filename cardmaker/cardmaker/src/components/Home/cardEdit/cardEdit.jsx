import React, { startTransition } from "react";
import { useState } from "react";
import Editor from "../Editor/Editor";
import styles from "./cardEdit.module.css";
const CardEdit = (props) => {
  const cards = props.carddata;
  return (
    <section className={styles.section}>
      <h1>Card Maker</h1>
      <div>
      {cards.map((card) => 
        <div className={styles.card} key={card.id}>
          <Editor card={card}/>
        </div>
      )}
      </div>
    </section>
  );
};

export default CardEdit;
