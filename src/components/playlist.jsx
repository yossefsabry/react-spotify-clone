import React from 'react'

const playlist = (props) => {
  const style ={
    padding: "9px 0px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "white",
  }
  return (
    <div style={style}>{props.name}</div>
  )
}

export default playlist
