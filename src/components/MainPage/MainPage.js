import React from "react";
import { Container } from "./MainPage.style";
import TodoList from "../TodoList/TodoList";
import FinishList from "../FinishList/FinishList";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      finishList: [],
    };
  }

  changeState = (newtodoList, removedItem) => {
    this.setState({
      todoList: newtodoList,
      finishList: [...this.state.finishList, removedItem],
    });
  };
  // <form>不会
  //<handleOnClick>不会
  //打印 inputValue(没有.value=>是个object)
  handleOnClick = (e) => {
    const inputValue = document.getElementById("todo-input").value;
    const form = document.getElementById("form");
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, inputValue],
    });
    form.reset();
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <h1>This is My Todo and Finish List</h1>
        <form id="form">
          <input type="text" id="todo-input" />
          <input type="submit" value="Add" onClick={this.handleOnClick} />
        </form>
        <TodoList
          todoList={this.state.todoList}
          changeState={this.changeState}
        />
        <FinishList finishList={this.state.finishList} />
      </Container>
    );
  }
}
export default MainPage;
