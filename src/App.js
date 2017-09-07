import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import YouTubeSearch from 'youtube-search';
import { SearchBar, VideoList, VideoDetail } from './components';

//need api key from google youtube api
const API_KEY = '';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], playingNow: null};

    this.searchOnRouge('Fifth Harmony');
  }
  
  searchOnRouge(term) {
    var opts = {key: API_KEY, maxResults: 5}
    YouTubeSearch(term, opts, (err, result) => {
      if(err) return console.error(err, 'cant fetch data: api key incorrect');
      this.setState({videos: result, playingNow:result[0]})
    })
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css" />
        </Helmet>

        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <p className="title is-3">ROUGE</p>
          </div>
        </nav>

        <div className="columns">

          <div className="column is-7">
            <div className="block">
              <SearchBar
                onNewSearch={_.debounce(term => this.searchOnRouge(term), 400)}
              />
            </div>


            <div className="block">
              <VideoDetail video={this.state.playingNow} />
            </div>
          </div>

          <div className="column">
            <div className="block">
              <VideoList
                videos={this.state.videos}
                onSelectPlayNow={playingNow => this.setState({playingNow})}
            />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
