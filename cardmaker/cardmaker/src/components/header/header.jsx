import React from 'react';
import styles from './header.module.css';
const Header = (onLogout) => (
    <div className={styles.card_top}>
        <img className={styles.logo} src='/images/logo.png'></img>
        <button className={styles.logout} onLogout={onLogout}>Logout</button>
        <p className={styles.text}>Business Card Maker</p>
    </div>
);

export default Header;
