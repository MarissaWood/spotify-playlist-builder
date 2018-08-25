import React, { Component } from "react";
import SongDisplay from "./SongDisplay";
import "./Playlist.css";

class Playlist extends Component {
  msToTime = duration => {
    // let milliseconds = parseInt((duration % 1000) / 100);
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds; //+ "." + milliseconds;
  };

  render() {
    let playlistResults;
    playlistResults = this.props.playlist.map((item, i) => {
      return (
        <li>
          <SongDisplay
            title={item.title}
            artist={item.artist}
            image={item.image}
            bpm={item.bpm}
            time={item.time}
            key={i}
          />
        </li>
      );
    });

    let clearButton;
    let removeButton;
    let saveButton;
    if (playlistResults[1]) {
      clearButton = (
        <button onClick={this.props.clearPlaylist}>Clear Playlist</button>
      );
      removeButton = (
        <button onClick={this.props.removeLastSong}>Remove last song</button>
      );
      saveButton = (
        <div>
          <button onClick={this.props.savePlaylist} className="save-playlist">
            Save PlayList to your account
          </button>
          <div className="hoverText">
            Only click this button once! It will save a new playlist{" "}
            <strong>every</strong> time it is pushed.
          </div>
        </div>
      );
    }

    let totalTime;
    totalTime = this.props.playlist.reduce(
      (sum, song) => sum + song.duration,
      0
    );
    totalTime = this.msToTime(totalTime);

    return (
      <div>
        <h1>PlayList</h1>
        <div className="stats">
          <p>
            <strong>Total time:</strong> {totalTime}
          </p>
          <br />
        </div>
        {playlistResults}
        {clearButton}
        {removeButton}
        {saveButton}
      </div>
    );
  }
}

export default Playlist;
