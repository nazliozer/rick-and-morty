import React, { Component } from "react";
import Header from "../components/Header/Header";
import Filter from "../components/Filters/Filter";
import "./Home.scss";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import List from "../components/List/List";
import ShowMoreButton from "../components/ShowMoreButton/ShowMoreButton";

export default class Home extends Component {
  constructor() {
    super();
    this.filterCharacters = this.filterCharacters.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.state = {
      characters: [],
      filteredCharacters: [],
      next: "",
      lastType: ''
    };
  }

  filterCharacters = (type) => {
    const filtered = this.state.characters.filter((character) =>
      character.species.includes(type)
    );
    this.setState({ filteredCharacters: filtered, lastType: type });
  };

  loadNextPage() {
    axios.get(this.state.next).then((res) => {
      const newCharacters = res.data.results;
      const oldCharacters = [...this.state.characters];
      const oldFilteredCharacters = [...this.state.filteredCharacters]
      this.setState(
        {
          characters: [...oldCharacters, ...newCharacters],
          filteredCharacters: [
            ...oldFilteredCharacters,
            ...newCharacters.filter(
              (character) => character.species.includes(this.state.lastType)
            ),
          ],
          next: res.data.info.next,
        },
        console.log(this.state.lastType)
      );
    });
  }

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      const characters = res.data.results;
      this.setState({
        characters: characters,
        filteredCharacters: characters,
        next: res.data.info.next,
      });
    });
  }

  render() {
    return (
      <div className="home h-max ">
        <Header />
        <Filter filterCharacters={this.filterCharacters} />
        <List data={this.state.filteredCharacters} />
        <ShowMoreButton loadMoreData={this.loadNextPage}></ShowMoreButton>
        <Footer />
      </div>
    );
  }
}
