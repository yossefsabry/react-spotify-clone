import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuNavbar = (props) => {
  const [hovered, setHovered] = useState(false);

  const style__menu = {
    display: "flex",
    alignItems: "center",
    gap: "0px 10px",
    color: "white",
    padding: `${props.imagePlaylist ? '6px 0px' : '12px 0'}`,
    transition: "all .3s", // Added transition for background-color
    cursor: "pointer",
    textDecoration: "none", // Remove default Link underline
    transform: hovered ? "translateX(20px)" : "translateX(0)", // Background color changes when hovered
  };

  return (
    <Link
      to={props.url}
      style={style__menu}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontWeight: "100" }}>{props.icon}</span>
      {props.imagePlaylist ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <img src={props.image} alt="image playlist" style={{ width: '60px', height: '60px' }} />
          <p>{props.name}</p>{" "}
        </div>
      ) : (
          <p>{props.name}</p>
        )}
    </Link>
  );
};

export default MenuNavbar;

