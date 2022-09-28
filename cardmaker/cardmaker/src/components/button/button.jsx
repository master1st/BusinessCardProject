import React from 'react';
import styles from './button.module.css';
const Button = () => {
    return (
        <section className={styles.section}>
            <button className={styles.fileupload}>file upload</button>
            <input type="submit" value="click me!"className={styles.button}></input>
        </section>
    );
};

export default Button;