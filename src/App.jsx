import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
