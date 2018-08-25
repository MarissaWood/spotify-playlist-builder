import React, { Component } from "react";
// import "./SongDisplay.css";

class SongDisplay extends Component {
  render() {
    return (
      <div className="playlist-song">
        <img src={this.props.image} alt="icon" className="icon" />
        <p className="title">
          <strong>{this.props.title}</strong>, by {this.props.artist}
        </p>
        <div>
          {this.props.time} <br />({this.props.bpm} BPM)
        </div>
      </div>
    );
  }
}

export default SongDisplay;
