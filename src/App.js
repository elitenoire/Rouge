import React, { Component } from 'react';
import YouTubeSearch from 'youtube-api-search-promise';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCpFxRHZXmSL0vct7PZmZ6GNlWhBSVcT1E';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YouTubeSearch({key: API_KEY, term: 'Fifth Harmony'})
      .then(result => this.setState({videos: result}))
      .catch(err => console.error(err, 'cant fetch data'))

  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
