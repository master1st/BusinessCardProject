import React, { startTransition } from "react";
import { useState } from "react";
import Editor from "../Editor/Editor";
import styles from "./cardEdit.module.css";
const CardEdit = () => {
  const [profile, setprofile] = useState();

  return (
    <section className={styles.section}>
      <h1>Card Maker</h1>
    <Editor/>
    </section>
  );
};

export default CardEdit;
