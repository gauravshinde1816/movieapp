import { ADD_ITEM, DELETE_ITEM, GET_ITEM } from "../actions/types";
const initialState = {
  todos: [
    { id: 1, title: "Xenia Website update" },
    { id: 2, title: "  Start chapter 4  : Think and Grow Rich" },
    { id: 3, title: "Complete  chapter 2: MOngoDB Basics" },
    { id: 4, title: "Fix redux deleteItem bug Unify: Social Work Platform " },
    { id: 5, title: "Practice Basic ML alogrithms and resume NLP course" },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        todos: [action.payload, ...state.todos],
      };
    case DELETE_ITEM:
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
