import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  };
  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}
