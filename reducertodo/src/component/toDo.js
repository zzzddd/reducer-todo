import React from "react";

export default function Todo(props) {
  return (
    <div>
      <h2
        style={{
          cursor: "pointer",
          textDecoration: `${
            props.todo.completed ? "red underline overline wavy" : "none"
          }`,
        opacity: `${props.todo.completed ? "0.2" : "1"}`
        }}
        onClick={() =>
          props.dispatch({ type: "TOGGLE_TODO", payload: props.todo.id })
        }
      >
        {props.todo.item}
      </h2>
    </div>
  );
}
