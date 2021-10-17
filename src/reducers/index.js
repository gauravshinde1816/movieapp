import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import movieReducer from "./movieReducer";
export default combineReducers({
  todo: todoReducer,
  movie: movieReducer,
});
