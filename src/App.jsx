import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Menu from "./components/menu/Menu";
import MyActivity from "./pages/my_activity/MyActivity";
import Header from "./components/header/Header";
import "./global.scss";
import PopupManager from "./components/popup_manager/PopupManager";
import Stacking from "./pages/staking/Stacking";
import Investment from "./pages/investment/Investment";
import AllMovies from "./pages/film_investment/FilmInvestment";
import Movie from "./pages/movie/Movie";

function App() {
  return (
    <>
      <PopupManager/>
      <Menu/>
      <div className="main">
        <Header/>
        <div className="app">
          <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/my-activity" element={<MyActivity />} />
              <Route path="/staking-|-Tickets" element={<Stacking />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/film-Investment" element={<AllMovies />} />
              <Route path="/movie/:title" element={<Movie />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
