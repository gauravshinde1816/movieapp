import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  return (
    <div className="container my-5">
      <h1 className="text-center">
        <i className="fa fa-check-square-o mr-4" aria-hidden="true"></i>
        My Todos
      </h1>
      {props.todos &&
        props.todos.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, null)(TodoList);
