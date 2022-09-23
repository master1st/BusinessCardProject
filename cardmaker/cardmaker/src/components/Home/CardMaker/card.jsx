import React, { startTransition } from "react";
import { useState } from "react";
import styles from './card.module.css';
const Card = () => {
  const [profile, setprofile] = useState();

  return (
    <section className={styles.section}>
      <div className={styles.first_text}>
        <input type="text" name="member_name"></input>
        <input type="text" name="member_name"></input>
        <div class={styles.dropdown}>
          <button class={styles.dropdown_btn}>Real Estate Type</button>
          <div class={styles.dropdown_submenu}>
            <a href="#none">All</a>
            <a href="#none">One room</a>
            <a href="#none">1.5 rooms</a>
            <a href="#none">Two rooms</a>
            <a href="#none">Three rooms</a>
            <a href="#none">Officetel</a>
            <a href="#none">Apartment</a>
          </div>
        </div>
      </div>

      <div className={styles.second_text}>
        <input type="text" name="member_name"></input>
        <input type="text" name="member_name"></input>
      </div>
      <input type="text" name="member_name"></input>
      <div className={styles.button}>
        <button>no file</button>
        <button>Add</button>
      </div>
    </section>
  );
};

export default Card;
