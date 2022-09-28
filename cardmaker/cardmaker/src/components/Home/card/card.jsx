import React from 'react';
import styles from './card.module.css';
const Card = (props) => {
    const {id, backgroundColor, company, email, fileName, fileUrl,
    introduction, major, name } = props.card;
    // console.log(props.card);
    return (
        <section className={styles.card} style={{ 
            backgroundColor: `${backgroundColor}`
        }} >
            <img src='/images/default_logo.png' className={styles.cardimg}></img>
            <span className={styles.cardtext}>
                <h1 className={styles.z}>{name}</h1>
                <p className={styles.text}>{company}</p>
                <div className={styles.br}></div>
                <p className={styles.text}>{major}</p>
                <p className={styles.text}>{email}</p>
                <p className={styles.text}>{introduction}</p>
            </span>
        </section>
    );
};

export default Card;