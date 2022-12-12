import React, { Component } from "react";
import "./CharacterButton.scss";

export default class CharacterButton extends Component {
  render() {
    return (
      <>
        <div className="char-button inline-flex items-center justify-center rounded-lg h-9 px-3 py-2">
          {this.props.name}
        </div>
      </>
    );
  }
}
