import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const navigate = useNavigate();
    const goToMaker = userId => {
        navigate({
            pathname: '/maker',
            state: {id: userId},
        });
    };
    const onLogout = (event) => {
        authService
        .logout();
    }


    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            .then((data) => {goToMaker(data.user.uid)});
            };


    return (
        <section className={styles.box}>
            <Header Logout={onLogout}/>
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

