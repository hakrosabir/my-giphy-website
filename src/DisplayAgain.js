import React, { Component } from "react";

class DisplayAgain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1> Class Based Component </h1>
        <h2> I love my beautiful {this.props.country} </h2>
        <h1> I am {this.props.years} old </h1>
      </>
    );
  }
}

export default DisplayAgain;
