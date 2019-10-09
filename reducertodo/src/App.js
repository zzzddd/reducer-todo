  
import React, { useState, useReducer } from "react";
import "./App.css";

import { initialState, todoReducer } from "./reducer/reducers";

import TodoList from "./component/toDolist";
import TodoForm from "./component/toDoForm";


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
// accept two value and return two value..cureentState and a method
  console.log("in App js..", state);

  return (
    <div className="App">
      <h1>👺 Reducer Todo 👺</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

