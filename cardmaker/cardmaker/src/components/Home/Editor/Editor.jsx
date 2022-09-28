import React, { startTransition } from "react";
import { useState } from "react";
import styles from "./Editor.module.css";
import Button from "../../button/button";
const Editor = (props) => {
  const {id, backgroundColor, company, email, fileName, fileUrl,
    introduction, major, name } = props.card;
    console.log(props.card);

  return (
      <form className={styles.form}>
        <input className={styles.input} type="text" name="name" value={name} />
        <input className={styles.input} type="text" name="company" value={company} />
        <select className={styles.select} name="theme" value={backgroundColor}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input className={styles.second_input} type="text" name="title" value={major} />
        <input className={styles.second_input} type="text" name="email" value={email} />
        <textarea className={styles.textarea} name="introduction" value={introduction}></textarea>
        <Button />
      </form>
  );
};

export default Editor;
