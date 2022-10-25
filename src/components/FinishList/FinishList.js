import React, { Component } from "react";

class FinishList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Finish">
        <div className="finishTitle"> This is Finish List</div>
        <ul>
          {this.props.finishList.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FinishList;
