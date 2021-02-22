import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
      currentTheme: "blue",
      count: 0,
    };
  }
  //We return an object that was in the same structure as before as the return value of this function becomes the new state.
  handleClick = () => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ClickityClick;
