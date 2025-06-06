import React from "react";

import PlayButton from "../PlayButton/PlayButton";

import "./RecentlyBlock.css"

function RecentlyBlock({playingRecently, id, musicCover, name, onPlayClick}) {
  return (
    <div className="music-item recently-played">
      <div className="left-music-item">
        <img src={musicCover} alt="Music cover" draggable="false" />
        <b>{name}</b>
      </div>
      <div className="right-icon">
        <PlayButton isPlaying={playingRecently===id} onclick={onPlayClick}/>
      </div>
    </div>
  );
}

export default RecentlyBlock;
