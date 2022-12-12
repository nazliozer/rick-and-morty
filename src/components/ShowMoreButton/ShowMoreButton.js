import React, { Component } from "react";
import './ShowMoreButton.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export default class ShowMoreButton extends Component {
  render() {
    return (
      <>
        <div className="flex  justify-center items-center">
          <button
            onClick={() => this.props.loadMoreData()}
            className=" w-96 button inline-flex items-center justify-center rounded-lg font-medium text-justify mx-3 mb-12"
          >
            <span className="pr-2 	">Show More</span>
            <FontAwesomeIcon icon={faRotate} />
          </button>
        </div>
      </>
    );
  } 
}
