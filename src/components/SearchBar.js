import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {term: ''};
    }

    onInputChange(term) {
        this.setState({ term })
        this.props.onNewSearch(term)
    }

    render() {
        return (
            <input
                className="input is-danger"
                value={this.state.term}
                placeholder="Search..."
                onChange={e => this.onInputChange(e.target.value)}
            />
        )
    }
};

export { SearchBar };