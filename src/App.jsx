import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Menu/>
      <div className="main">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
