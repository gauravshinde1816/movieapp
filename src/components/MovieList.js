import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchMovie } from "../actions/searchActions";
import MovieItem from "./MovieItem";
const MovieList = (props) => {
  return (
    <div className="my-5 d-flex justify-content-around flex-wrap">
      {props.movies.length > 0 &&
        props.movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
});
export default connect(mapStateToProps, { searchMovie })(MovieList);
