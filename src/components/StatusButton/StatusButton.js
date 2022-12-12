import React, { Component } from "react";
import "./StatusButton.scss";

export default class StatusButton extends Component {
  state = {
    colors: {
      Alive: "#B3FF38",
      Dead: "#BF0050",
      unknown: "#B2B4D7",
    },
  };
  render() {
    return (
      <>
        <div className="stat-button rounded-lg inline-flex items-center justify-evenly h-9  py-2 ">
          <div
            className="rounded-full w-2.5 h-2.5 "
            style={{ backgroundColor: this.state.colors[this.props.name] }}
          ></div>
          <div className="ml-2">{this.props.name}</div>
        </div>
      </>
    );
  }
}
