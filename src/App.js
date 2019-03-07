import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {

  state = {
    films: TMDB.films,
    favs: [],
    current: null
  }
  render() {
    return (
      <div className="film-library">
      <FilmListing films={this.state.films} favs={this.state.favs} />
      <FilmDetails films={this.state.films} current={this.state.current}/>
    </div>
    );
  }
}

export default App;
