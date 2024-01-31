import React from "react";

const MenuNavbar = (props) => {

  const style__menu = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    color: "white",
    padding: "12px 0",
    transititon: "200ms ease-in-out",
    cursor: "pointer",
  };

  return (
    <a style={style__menu}>
      <span style={{fontWeight: "100"}}>{props.icon}</span>
      <p>{props.name}</p>{" "}
    </a>
  );
};

export default MenuNavbar;
