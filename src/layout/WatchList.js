import React, { useEffect } from "react";
import { connect } from "react-redux";
import WatchListComponent from "../components/WatchListComponent";
const WatchList = (props) => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-around">
        {props.watchlist.map((movie, index) => (
          <WatchListComponent key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watchlist: state.movie.watchlist,
});

export default connect(mapStateToProps, null)(WatchList);
