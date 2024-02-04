import React from "react";
import "./Navbar.css";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuNavbar from "../MenuNavbar";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import RecommendIcon from "@mui/icons-material/Recommend";

const Navbar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="navbar__container">
      <div className="menu__navbar__container" style={{ marginBottom: "10px" }}>
        <MenuNavbar icon={<AddHomeWorkIcon />} name="Home" url="/" />
        <MenuNavbar icon={<SearchIcon />} name="Search" />
      </div>
      <div className="playlist__container">
        <div className="Title__playlist">
          <MenuNavbar icon={<VideoLibraryIcon />} name="Your Library" />
        </div>
        <div className="pages__title" > 
          <MenuNavbar icon={<RecommendIcon />} name="Recommend List" url="/recommend"/>
        </div>
        <div className="playlist__content__container">
          {playlists
            ? playlists?.body?.items?.map((playlist) => (
              <MenuNavbar key={playlist.id} name={playlist.name} />
            ))
            : "no playlists"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
