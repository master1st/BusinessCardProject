import { isFocusable } from "@testing-library/user-event/dist/utils";
import Home from "./components/Home/home";
import React from "react";
import Login from "./components/Login/login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Maker from "./components/Home/home";
function App({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
