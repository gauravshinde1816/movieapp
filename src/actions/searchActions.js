import { SEARCH_MOVIE, ADD_TO_WATCHLIST, DELETE_FROM_WATCHLIST } from "./types";
import axios from "axios";
export const searchMovie = (key) => async (dispatch) => {
  const res = await axios.get(
    `https://imdb-api.com/en/API/SearchMovie/k_1vsp6st3/${key}`
  );
  //   console.log(res.data.results);
  dispatch({
    type: SEARCH_MOVIE,
    payload: res.data.results,
  });
};

export const addToWatchList = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_WATCHLIST,
    payload: item,
  });
};

export const deleteFromWatchList = (id) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_WATCHLIST,
    payload: id,
  });
};
