import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            .then(console.log);
    }
    return (
        <section className={styles.box}>
            <Header />
            <section className={styles.Login}>
                <h1 className={styles.text}>Login</h1>
                <ul className={styles.Login_icon}>
                    <button className={styles.button} onClick={onLogin}>Google</button>
                    <button className={styles.button} onClick={onLogin}>Github</button>
                </ul>
            </section>
            <Footer />
        </section>
    )
}

export default Login;

