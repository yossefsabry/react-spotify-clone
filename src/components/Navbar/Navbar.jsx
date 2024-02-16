import React from "react";
import "./Navbar.css";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuNavbar from "../MenuNavbar";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import RecommendIcon from "@mui/icons-material/Recommend";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="navbar__container">
      <div className="menu__navbar__container" style={{ marginBottom: "10px" }}>
        <MenuNavbar icon={<AddHomeWorkIcon />} name="Home" url="/" />
        <MenuNavbar icon={<SearchIcon />} name="Search" />
      </div>
      <div className="playlist__container">
        <div className="title__playlist">
          <MenuNavbar icon={<VideoLibraryIcon />} name="Your Library" />
          <div className="icon__title" >
            <AddIcon />
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="pages__title" > 
          <MenuNavbar icon={<RecommendIcon />} name="Recommend List" url="/recommend"/>
        </div>
        <div className="playlist__content__container">
          {playlists
            ? playlists?.body?.items?.map((playlist) => (
                <MenuNavbar key={playlist.id} id={playlist.id} name={playlist.name} imagePlaylist={true} image={playlist.images[0].url} url="/playlist" />
              ))
            : "no playlists"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
