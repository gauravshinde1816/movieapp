import React from "react";
import { connect } from "react-redux";
import { deleteFromWatchList } from "../actions/searchActions";
const WatchListComponent = ({ movie, deleteFromWatchList }) => {
  const handleSubmit = () => {
    deleteFromWatchList(movie.id);
    console.log(movie);
  };
  return (
    <div className="p-4">
      <div className="card" style={{ width: "16rem" }}>
        <img src={movie.image} className="img-fluid" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{movie.title}</h5>
            <i
              className="fa fa-trash action mr-2 text-danger"
              aria-hidden="true"
              onClick={handleSubmit}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteFromWatchList })(WatchListComponent);
