import {
  SEARCH_MOVIE,
  ADD_TO_WATCHLIST,
  DELETE_FROM_WATCHLIST,
} from "../actions/types";
const initialState = {
  movies: [],
  watchlist: [
    {
      description: "(2012)",
      id: "tt0848228",
      image:
        "https://imdb-api.com/images/original/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg",
      resultType: "Title",
      title: "The Avengers",
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [{ ...action.payload, isAdded: true }, ...state.watchlist],
      };

    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    case DELETE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
