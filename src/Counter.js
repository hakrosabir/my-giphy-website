import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  IncreaseNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  DecreaseNumber = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1> Current Number: {this.state.number} </h1>
        <button onClick={this.IncreaseNumber}> Increase Number </button>
        <button onClick={this.DecreaseNumber}> Decrease Number </button>
      </div>
    );
  }
}

export default Counter;
