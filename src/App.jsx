import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Menu from "./components/menu/Menu";
import MyActivity from "./pages/my-activity/MyActivity";
import Header from "./components/header/Header";
import "./global.scss";

function App() {
  return (
    <>
      <Menu/>
      <div className="main">
        <Header/>
        <div className="app">
          <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/my-activity" element={<MyActivity />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
