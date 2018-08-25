import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./SongPreview.css";
import SongDetail from "./SongDetail";

class SongPreview extends Component {
  render() {
    return (
      <div className="song-preview">
        <div className="topRow">
          <img src={this.props.image} alt="song preview" className="icon" />
          <p className="title">
            <strong>{this.props.title}</strong>, by {this.props.artist}
          </p>
        </div>
        <div className="bottomRow">
          <SongDetail
            id={this.props.id}
            title={this.props.title}
            artist={this.props.artist}
            image={this.props.image}
            token={this.props.token}
            addToPlaylist={this.props.addToPlaylist}
          />
        </div>
      </div>
    );
  }
}

export default SongPreview;
