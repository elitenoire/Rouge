import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import YouTubeSearch from 'youtube-api-search-promise';
import { SearchBar, VideoList } from './components';

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
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css" />
        </Helmet>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
