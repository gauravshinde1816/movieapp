import React, { useState } from "react";
import search from "../assets/search.png";
import { connect } from "react-redux";
import { searchMovie } from "../actions/searchActions";
const Search = (props) => {
  const [key, setKey] = useState("");
  const handleSearch = (key) => {
    props.searchMovie(key);
    setKey("");
  };
  return (
    <div style={{ width: "60%" }}>
      <h1 className="text-center text-white display-4">
        Unlimited movies, TV shows and more.
      </h1>
      <h3 className="text-center text-white">Always Watch , Best Rated.</h3>
      <div className="input-group mb-3 input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <img className="icon" src={search} />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Favourite Movie"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <div className="input-group-append">
          <span
            style={{ cursor: "pointer" }}
            className="input-group-text bg-danger text-white"
            onClick={() => handleSearch(key)}
          >
            Find
          </span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { searchMovie })(Search);
