import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './home.module.css';
import CardMaker from './CardMaker/cardMaker';
import CardPreview from './CardPreview/cardPreview';
const Maker = (props) => {

    return (
    <section className={styles.box}>
        <Header />
        <div className={styles.mid_box}>
            <CardMaker />
            <CardPreview />
        </div>
        <Footer />
    </section>

        )};

export default Maker;