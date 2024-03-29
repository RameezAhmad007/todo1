import React from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default withRouter(App);
