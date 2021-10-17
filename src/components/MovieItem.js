import React from "react";
import bookmark from "../assets/bookmark.png";

import { connect } from "react-redux";
import { addToWatchList } from "../actions/searchActions";
import "./movieItem.css";

const MovieItem = ({ movie, addToWatchList }) => {
  const handleSubmit = () => {
    addToWatchList(movie);
    console.log(movie);
  };
  return (
    <div className="p-4">
      <div className="card" style={{ width: "16rem" }}>
        <img src={movie.image} className="img-fluid" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{movie.title}</h5>
            {movie.isAdded ? (
              <i className="bi bi-bookmark-check text-success"></i>
            ) : (
              <img
                src={bookmark}
                onClick={handleSubmit}
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  height: "30px",
                  width: "30px",
                  right: 0,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watchlist: state.movie.watchlist,
});

export default connect(mapStateToProps, { addToWatchList })(MovieItem);
