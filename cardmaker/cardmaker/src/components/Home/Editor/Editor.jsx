import React, { startTransition } from "react";
import { useState } from "react";
import styles from "./Editor.module.css";
const Editor = () => {
  const [profile, setprofile] = useState();

  return (
    <section className={styles.section}>
      <div className={styles.first_text}>
        <input className={styles.text}type="text" name="member_name"></input>
        <input className={styles.text}type="text" name="member_name"></input>
        <div class={styles.dropdown}>
          <button class={styles.dropbtn}>드롭다운 메뉴</button>
          <div class={styles.dropdown_content}>
            <a href="#">홈</a>
            <a href="#">회사소개</a>
            <a href="#">제품소개</a>
            <a href="#">오시는길</a>
          </div>
        </div>
      </div>

      <div className={styles.first_text}>
        <input className={styles.text}type="text" name="member_name"></input>
        <input className={styles.text}type="text" name="member_name"></input>
      </div>
      <div className={styles.first_text}>
      <input className={styles.text} type="text" name="member_name"></input>
      </div>
      <div className={styles.first_text}>
        <button className={styles.text}>no file</button>
        <button className={styles.text}>Add</button>
      </div>
    </section>
  );
};

export default Editor;
