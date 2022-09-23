import React, { useEffect } from 'react';
import styles from './cardMaker.module.css';
import Card from './cardEdit';
import CardPreview from '../CardPreview/cardPreview';
import { useState } from 'react';
const CardMaker = () => {
    const [cardData, setcardData] = useState(
    [
    {'name' : "Ellie Dream Coding",
    'company' : "Samsung Electronics",
    'backgroundColor': "Dark",
    'major' : "Software Engineer",
    'email' : "dreamcoding.academe.com",
    'introduction' : "Don't for get to code your dream",
    'fileName':'',
    'fileUrl':'',
    },
    {'name' : "Ellie Dream Coding",
    'company' : "Samsung Electronics",
    'backgroundColor': "Dark",
    'major' : "Software Engineer",
    'email' : "dreamcoding.academe.com",
    'introduction' : "Don't for get to code your dream",
    'fileName':'',
    'fileUrl':'',
    },
    {'name' : "Ellie Dream Coding",
    'company' : "Samsung Electronics",
    'backgroundColor': "Dark",
    'major' : "Software Engineer",
    'email' : "dreamcoding.academe.com",
    'introduction' : "Don't for get to code your dream",
    'fileName':'',
    'fileUrl':'',
    }]
    
    );
    /*useEffect(() => {
        
    })*/

    return (
        <section className={styles.box}>
        <h1>Card Maker</h1>
        <cardEdit />
        <CardPreview cards={cardData}/>

        </section>
    );
};

export default CardMaker;

//textfield 2개, 색상 선택 1개,
//textfield 2개 
//textfield 1개 
//btn 2개 