import React from "react";

import Todo from "./toDo";

export default function TodoList(props) {
  return (
    <div>
      {props.data.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
}
