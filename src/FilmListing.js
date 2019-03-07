import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

    state = {
        filter: "ALL"
    }

    handleFilter = (filter) => {
        this.setState({filter});
    }

    render() {

        var allListings = this.props.films.map( film => {
            return <FilmRow key={film.id} title={film.title} url={film.poster_path} released={film.release_date}/>;
        });
        
        let base = "film-list-filter";
        let allClass = this.state.filter === "ALL" ? `${base} is-active` : base;
        let favClass = this.state.filter === "FAVS" ? `${base} is-active` : base;

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={allClass} onClick={ () => {this.handleFilter('ALL')}}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={favClass} onClick={ () => {this.handleFilter('FAVS')}}>
                         FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allListings}
            </div>
        );
    }
}

export default FilmListing;