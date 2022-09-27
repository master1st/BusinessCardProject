import { isFocusable } from "@testing-library/user-event/dist/utils";
import Home from "./components/Home/home";
import React from "react";
import Login from "./components/Login/login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from './app.module.css';
import CardMaker from "./components/Home/CardMaker/cardMaker";
function App({ authService }) {
  return ( 
    <div className={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login authService={authService} />} />
        <Route path="/maker" element={<CardMaker />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
