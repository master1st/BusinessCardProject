import React, { useEffect } from "react";
import styles from "./cardMaker.module.css";
import CardPreview from "../CardPreview/cardPreview";
import CardEdit from '../cardEdit/cardEdit';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { useState } from "react";
const CardMaker = () => {
  const [cardData, setcardData] = useState([
    {
      id: 1,
      name: "Ellie Dream Coding",
      company: "Samsung Electronics",
      backgroundColor: "pink",
      major: "Software Engineer",
      email: "dreamcoding.academe.com",
      introduction: "Don't for get to code your dream",
      fileName: "",
      fileUrl: "",
    },
    {
      id: 2,
      name: "Ellie Dream Coding",
      company: "Samsung Electronics",
      backgroundColor: "black",
      major: "Software Engineer",
      email: "dreamcoding.academe.com",
      introduction: "Don't for get to code your dream",
      fileName: "",
      fileUrl: "",
    },
    {
      id: 3,
      name: "Ellie Dream Coding",
      company: "Samsung Electronics",
      backgroundColor: "blue",
      major: "Software Engineer",
      email: "dreamcoding.academe.com",
      introduction: "Don't for get to code your dream",
      fileName: "",
      fileUrl: "",
    },
  ]);
  /*useEffect(() => {
        
    })*/

  return (
    <section className={styles.box}>
      <Header />
      <div className={styles.mid_box}>
        <CardEdit carddata={cardData} />
        <CardPreview carddata={cardData}/>
      </div>
      <Footer />
    </section>
  );
};

export default CardMaker;
