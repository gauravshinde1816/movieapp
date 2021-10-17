import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import Search from "./Search";
import MovieList from "../components/MovieList";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="d-flex justify-content-center align-items-center search">
        <Search />
      </div>
      <MovieList />
    </div>
  );
};

export default Home;
