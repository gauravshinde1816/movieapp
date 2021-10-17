import React from "react";
import "./Todo.css";
import { connect } from "react-redux";
import { deleteItem } from "../actions/todoActions";
const TodoItem = ({ item, deleteItem }) => {
  return (
    <div style={{ boxShadow: "1px 1px 5px grey", margin: "10px" }}>
      <div className="d-flex justify-content-between p-3">
        <h4>{item.title}</h4>
        <div>
          <i
            className="fa fa-trash action mr-2 text-danger"
            aria-hidden="true"
            onClick={() => deleteItem(item.id)}
          ></i>
          |{" "}
          <i
            className="fa fa-pencil action mr-2 text-primary"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteItem })(TodoItem);
