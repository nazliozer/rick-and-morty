import React, { Component } from "react";
import Card from "../Card/Card";
import './List.scss'

export default class List extends Component {
  render() {
    return (
      <>
        <div className="flex justify-evenly m-10 custom-min-height">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
            {this.props.data.map((character) => {
              return <Card key={character.id} data={character} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
