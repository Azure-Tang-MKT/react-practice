import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  clickDelete = (item) => {
    const filteredList = this.props.todoList.filter((el) => el !== item);
    this.props.changeState(filteredList, item);
  };

  //<ul>不熟悉
  render() {
    return (
      <div className="todo">
        <div className="todoTitle">To Do List</div>
        <ul>
          {this.props.todoList.map((el) => (
            <div className="todoLIst">
              <li>{el}</li>
              <a onClick={() => this.clickDelete(el)}>Delete</a>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
