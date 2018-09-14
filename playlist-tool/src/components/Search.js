import React, { Component } from "react";
import SongPreview from "./SongPreview";
import axios from "axios";
// import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResponseTrack: [],
      token: "",
      offset: 0
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      offset: 0
    });
  };

  handleSearch = e => {
    e.preventDefault();
    let auth = "Bearer " + this.props.token;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: auth
      }
    };
    let searchUrl =
      "https://api.spotify.com/v1/search?q=" +
      this.state.query +
      "&type=track&limit=10&offset=" +
      this.state.offset;
    axios
      .get(searchUrl, config)
      .then(res => {
        // console.log(res.data);
        let newOffset = this.state.offset + 10;
        this.setState({
          searchResponseTrack: res.data.tracks.items,
          offset: newOffset
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let searchResults;
    searchResults = this.state.searchResponseTrack.map((item, i) => {
      // console.log(item);
      return (
        <li>
          <SongPreview
            title={item.name}
            artist={item.artists[0].name}
            image={item.album.images[2].url}
            id={item.id}
            key={i}
            token={this.props.token}
            addToPlaylist={this.props.addToPlaylist}
          />
        </li>
      );
    });
    let nextButton;
    if (this.state.searchResponseTrack[1]) {
      nextButton = (
        <button className="next" onClick={this.handleSearch}>
          Next Page
        </button>
      );
    }
    return (
      <div className="left-column">
        <h2>Search by Track or Artist name: </h2>
        <form>
          <div className="search-box">
            <input type="text" name="query" onChange={this.handleInput} />
            <input type="submit" value="Search" onClick={this.handleSearch} />
          </div>
        </form>
        <ul>{searchResults}</ul>
        {nextButton}
      </div>
    );
  }
}

export default Search;
