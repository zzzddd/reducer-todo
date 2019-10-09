import React from "react";

import Todo from "./toDo";

export default function TodoList(props) {
    console.log("in todo list...", props);

  return (
    <div>
      {props.state.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </div>
  );
}
