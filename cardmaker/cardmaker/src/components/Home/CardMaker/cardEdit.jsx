import React, { startTransition } from "react";
import { useState } from "react";
import styles from './card.module.css';
const CardEdit = () => {
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

export default CardEdit;

/*Json 으로 데이터 던질까, object 더미데이터로 그냥 보낼까. 
Card Maker에 전달하라는 것은, 그안에 컴포넌트를 형성해서 만들라는건가. 
const [movies, setMovies] = useState([
  {title: 'Harry Potter1', year: 2001},
  {title: 'Harry Potter2', year: 2002},
  {title: 'Harry Potter3', year: 2003},
  {title: 'Harry Potter4', year: 2004},
]);
*/