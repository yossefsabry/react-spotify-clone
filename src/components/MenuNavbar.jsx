import React from "react";
import { Link } from "react-router-dom";

const MenuNavbar = (props) => {

  const style__menu = {
    display: "flex",
    alignItems: "center",
    gap: "0px 10px",
    color: "white",
    padding: "12px 0",
    transititon: "200ms ease-in-out",
    cursor: "pointer",
  };

  return (
    <Link style={style__menu} to={props.url}>
      <span style={{fontWeight: "100"}}>{props.icon}</span>
      <p>{props.name}</p>{" "}
    </Link>
  );
};

export default MenuNavbar;
