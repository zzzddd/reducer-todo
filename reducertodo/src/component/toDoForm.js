import React, { useState } from "react";

//  const [state, dispatch] = useReducer(todoReducer, initialState);

export default function TodoForm(p) {
  console.log('in todo form...',p)
  const [todo, setTodo] = useState("");
  return (
    <div className="input-bar">
      <input
        type="text"
        value={todo}
        placeholder="...todo"
        onChange={e => setTodo(e.target.value)}
      />
      
      <button
        onClick={() => {
         p.dispatch({
            type: "ADD_TODO",
            payload: { todo: todo}
          });
          setTodo("");
        }}
      >
        Add
      </button>
      <button
        className="clear-button"
        onClick={() => p.dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear completed
      </button>
    </div>
  );
}

