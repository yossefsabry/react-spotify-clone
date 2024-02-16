import React from "react";
import "./BodyComponent.css";

const SongRow = ({ track, number }) => {
  return (
    <div className="songRow">
      <p style={{marginRight: "9px", width: "30px"}}>{number}</p>
      <img className="songRow__album" src={track.album.images[0].url || track.album.images[1] || track.album.images[2]  } alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
