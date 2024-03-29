import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useDataLayerValue } from "./DataLayer/DataLayer";

const MenuNavbar = (props) => {
  const [hovered, setHovered] = useState(false);

  const style__menu = {
    display: "flex",
    alignItems: "center",
    gap: "0px 10px",
    color: "white",
    padding: `${props.imagePlaylist? "6px 10px" : "20px 18px 15px"}`,
    fontWeight: `${props.imagePlaylist? "" : "600"}`,
    fontFamily: `${props.imagePlaylist? "" : "Helvetica"}`,
    transition: "all .3s", // Added transition for background-color
    cursor: "pointer",
    textDecoration: "none", // Remove default Link underline
    background: `${hovered && props.bg==null ? "var(--gray-bg)" : "transparent"}`, // Background color changes when hovered
  };

  const [{ token }, dispatch] = useDataLayerValue();
  const s = new SpotifyWebApi();

  const handleClick = async () => {
    if (token && props.id !== undefined) {
      s.setAccessToken(token);
      dispatch({
        type: "SET_PLAYLIST_ID",
        playlist_id: props.id,
      });
    }
  };

  return (
    <Link
      to={props.url}
      style={style__menu}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => handleClick()}
    >
      <span style={{ fontWeight: "100" }}>{props.icon}</span>
      {props.imagePlaylist ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img src={props.image} alt="image playlist" style={{ width: "60px", height: "60px" }} />
          <p>{props.name}</p>{" "}
        </div>
      ) : (
        <p>{props.name}</p>
      )}
    </Link>
  );
};

export default MenuNavbar;
