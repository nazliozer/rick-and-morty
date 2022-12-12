import React, { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  render() {
    return (
      <>
        <button
          onClick={() => this.props.filter(this.props.searchKey)}
          className="button inline-flex items-center justify-center rounded-lg text-justify mx-3"
        >
          {this.props.name}
        </button>
      </>
    );
  }
}
