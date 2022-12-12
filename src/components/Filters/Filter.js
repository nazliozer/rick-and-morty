import React, { Component } from "react";
import Button from "../Button/Button";

export default class Filter extends Component {
  constructor() {
    super();
    this.species = this.species.bind(this);
  }
  species(type) {
    this.props.filterCharacters(type);
  }

  render() {
    return (
      <div className="flex justify-center items-center my-10">
        <Button filter={this.species} searchKey="" name="Show All"></Button>
        <Button filter={this.species} searchKey="Human" name="Human"></Button>
        <Button filter={this.species} searchKey="Alien" name="Alien"></Button>
        <Button filter={this.species} searchKey="Animal" name="Animal"></Button>
      </div>
    );
  }
}
