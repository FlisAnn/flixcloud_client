/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { getData } from "./modules/moviesData"

class DisplayMoviesData extends Component {
  state = {
    moviesData: [],
  };

  componentDidMount() {
    this.getMoviesData();
  }

  async getMoviesData() {
    let result = await getData();
    this.setState({ moviesData: result });
  }

  render() {
    let dataMovieIndex;
    if (Array.isArray(this.state.moviesData) && this.state.moviesData.length) {
      dataMovieIndex = (
        <div data-cy="index">
          {this.state.moviesData.map(item => {
            return (
              <div key={item.id} data-cy={`movie-${item.id}`}>
                {item.title}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
      <h3 data-cy="message">Sorry! This movie is not available!</h3>
      );
    }
    return <div>{dataMovieIndex}</div>;
  }
}

export default DisplayMoviesData;
