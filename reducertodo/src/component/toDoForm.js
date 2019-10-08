import React from "react";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handlesubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({
      newItem: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="add to do"
            name="newItem"
            value={this.newItem}
          />
          <button type="submit">add todo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
