export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  
  },
  {
    item: "Finish todo list",
    completed: false,
    id: 1568146979433,
  
  },
  {
    item: `Prepare for tomorrow's lecture`,
    completed: false,
    id: 1568152250811,
  
  }
];

export const todoReducer = (state, action) => {
    // this switches to the new state...reducer return one value..newState
    // by accepting two values state an action..
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload.todo,
          completed: false,
          id: Date.now(),
        
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
