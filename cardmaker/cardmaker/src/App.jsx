import { isFocusable } from "@testing-library/user-event/dist/utils";
import Home from "./components/Home/home";
import React from "react";
import Login from "./components/Login/login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Maker from "./components/Home/home";
import styles from './app.module.css';
function App({ authService }) {
  return ( 
    <div className={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
