import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js'
import Fav from './Fav.js';

class FilmRow extends Component {

    showDetails = (title) =>{
        console.log("show details:"+title)
    }

    render() {
        const released = new Date(this.props.released).getFullYear();
        
        return (
            <div className="film-row" onClick={ ()=> {this.showDetails(this.props.title)}}>
                <FilmPoster url={this.props.url} />

                <div className="film-summary">
                    <h1>{this.props.title}</h1>
                    <p>{released}</p>
                </div>
                <Fav />
            </div>

        );
    }
}

export default FilmRow;