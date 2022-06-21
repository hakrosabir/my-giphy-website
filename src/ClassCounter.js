import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0
    };
  }

  handleIncreaseCount = () => {
    this.setState({
      Count: this.state.Count + 1
    });
  };

  handleDecreaseCount = () => {
    this.setState({
      Count: this.state.Count - 1
    });
  };

  render() {
    return (
      <div>
        <h1> Counter : {this.state.Count} </h1>
        <button onClick={this.handleIncreaseCount}> Increase Count </button>
        <button onClick={this.handleDecreaseCount}> Decrease Count </button>
      </div>
    );
  }
}

export default ClassCounter;
