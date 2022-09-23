import React from 'react';
import styles from './cardMaker.module.css';
import Card from './card';
const CardMaker = () => {
    return (
        <section className={styles.box}>
        <h1>Card Maker</h1>
        <Card />
        </section>
    );
};

export default CardMaker;

//textfield 2개, 색상 선택 1개,
//textfield 2개 
//textfield 1개 
//btn 2개 