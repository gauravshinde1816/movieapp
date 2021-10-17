import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/todoActions";
const TodoForm = (props) => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { id: Math.floor(Math.random() * 100000), title: item };
    props.addItem(todo);
    setItem("");
  };
  return (
    <div className="container my-4">
      <h1 className="text-center">Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo">Add todo</label>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-block btn-outline-success">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addItem })(TodoForm);
