import React, { Component } from "react";
import "./Card.scss";
import axios from "axios";
import Swal from "sweetalert2";
import CharacterButton from "../CharacterButton/CharacterButton";
import StatusButton from "../StatusButton/StatusButton";
export default class Card extends Component {
  state = {
    episodeInfo: {},
  };
  componentDidMount() {
    axios
      .get(`${this.props.data.episode[0]}`)
      .then((res) => {
        const episodeData = res.data;
        this.setState({ episodeInfo: episodeData }, () => { });
        
      })
      .catch((error) => {
        return Swal.fire("Error!"); //Return message for all errors 
      });
    
  }
  render() {
    return (
      <>
        <div className="card flex-inline 	 sm:w-56 rounded-md overflow-hidden border border-opacity-60">
          <div className="image rounded-lg ">
            <img
              src={`${this.props.data.image}`}
              alt="char-img"
              className="w-full h-40 sm:h-100"
            ></img>
          </div>
          <div className="grid sm:grid-rows-2 grid-rows-5 divide-y divide-slate-100/25 ">
            <div className="characters sm:row-span-1 row-span-2 mb-5 px-3">
              <div className="name mb-3 font-bold pt-4">
                {this.props.data.name}
              </div>
              <div className="tags flex grid grid-cols-3 sm:grid-cols-2 gap-5 sm:gap-2  ">
                
                  <StatusButton name={this.props.data.status}></StatusButton>
            
                
                  <CharacterButton
                    name={this.props.data.species}
                  ></CharacterButton>
                
                  <CharacterButton
                    name={this.props.data.gender}
                  ></CharacterButton>
                
              </div>
            </div>
            <div className="info row-span-3 sm:row-span-1 pt-4 px-3">
              <div className="text-xs mb-1">Last known location: </div>
              <div className="text-sm pb-2">
                {this.props.data.location.name}
              </div>
              <div className="text-xs mb-1">First seen in: </div>
              <div className="text-sm break-all">
                {this.state.episodeInfo.name}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
