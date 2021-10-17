import React from "react";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import Home from "./layout/Home";
import WatchList from "./layout/WatchList";
import Navbar from "./layout/Navbar";
import "./layout/home.css";
const App = () => {
  return (
    <div className="hero">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/watchlist" component={WatchList} />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
