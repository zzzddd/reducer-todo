import React from "react";
import TodoList from "./component/toDolist";
import TodoForm from "./component/toDoForm";

const data = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data
    };
  }

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
      show: true
    };
    if (item !== "") {
      this.setState({
        data: [...this.state.data, newItem]
      });
    }
  };

  clearCompleted = () => {
    this.setState({ data: this.state.data.filter(item => !item.completed) });
  };

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    console.log("inside toggle", this.state.data);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          data={this.state.data}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
        <TodoList data={this.state.data} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;

