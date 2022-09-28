import React from 'react';
import styles from './button.module.css';
const Button = () => {
    return (
        <section className={styles.section}>
            <button className={styles.fileupload}>file upload</button>
            <button className={styles.button}>click me!</button>
        </section>
    );
};

export default Button;