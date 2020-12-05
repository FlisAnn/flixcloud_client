import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import MovieCard from "./MovieCard";
import RegisterModal from "./RegisterModal";

class SearchForMovies extends Component {
  state = {
    searchValue: "",
    movieSearchResults: [],
    authenticate: false,
  };

  setSearchInputValue(e) {
    this.setState({ searchValue: e.target.value });
  }

  async searchByTitle() {
    // const query = this.state.searchValue
    let response = await axios.get("/movies/search");
    this.setState({ movieSearchResults: response.data.movies });
  }

  render() {
    let displaySearchResults;
    displaySearchResults = this.state.movieSearchResults.map((movie) => {
      return <MovieCard movie={movie} />;
    });
    if (this.state.authenticate === true) {
      return (
        <>
          <Input
            type="text"
            data-cy="search-input"
            placeholder="Search By Title..."
          />
          <Button onClick={() => this.searchByTitle()} data-cy="search-button">
            Search
          </Button>
          <div data-cy="search-results">
            <ul>{displaySearchResults}</ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <RegisterModal />
        </>
      );
    }
  }
}

export default SearchForMovies;
