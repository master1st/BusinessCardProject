import React, { startTransition } from "react";
import { useState } from "react";
import styles from "./Editor.module.css";
import Button from "../../button/button";
import { useRef } from "react";
const Editor = (props) => {
  const [values, setValues] = useState({id:0, backgroundColor:"", company:"", email:"", fileName:"", fileUrl:"",
    introduction:"", name:"" });
    // console.log(props.card);
  let id_cnt = 1;
    const handleSubmit = (e,form) => {
      e.preventDefault();
      setValues({...values, [values.id]: values.id++})
      console.log(values);      
    }

    const handleChange = (e) => {
     const {name, value} = e.target;
      setValues({ ...values, [name]: value });
      console.log(values);
    }
  return (
      <form onSubmit={handleSubmit} name="card_maker" method="get" className={styles.form}>
        <input className={styles.input}  type="text" name="name" value={values.name} onChange={handleChange} />
        <input className={styles.input}  type="text" name="company" value={values.company} onChange={handleChange} />
        <select className={styles.select} name="theme" >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input className={styles.second_input}  type="text" name="title" onChange={handleChange} />
        <input className={styles.fileinput}  type="text" name="email"onChange={handleChange} />
        <textarea className={styles.textarea}  name="introduction" onChange={handleChange} ></textarea>
        <Button />
      </form>
  );
};

export default Editor;
