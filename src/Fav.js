import React, { Component } from 'react';

class Fav extends Component {
    state = {
        isFav: false
    }

    addFavorite = (e) => {
        e.stopPropagation();
        this.setState({isFav:!this.state.isFav});
    }

    render() {
        let state = this.state.isFav ? "remove_from_queue" : "add_to_queue";
        return (
            <div onClick={this.addFavorite} className={`film-row-fave ${state}`}>
                <p className="material-icons">{state}</p>
            </div>
        );
    }
}

export default Fav;