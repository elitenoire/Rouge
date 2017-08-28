import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {term: ''};
    }

    // onInputChange(e) {
    //     console.log(e.target.value)
    // }

    render() {
        return (
            <div>
                <input
                    className="input is-danger"
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})}
                />
            </div>
        )
    }
};

export { SearchBar };