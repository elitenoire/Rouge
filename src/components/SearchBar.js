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
            <div>
                <input
                    className="input is-danger"
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        )
    }
};

export { SearchBar };