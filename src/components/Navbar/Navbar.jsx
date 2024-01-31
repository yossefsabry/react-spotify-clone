import React from "react";
import "./Navbar.css";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuNavbar from "../MenuNavbar";
import { useDataLayerValue } from "../DataLayer/DataLayer";

const Navbar = () => {

  const [ { playlists } ] = useDataLayerValue();

  return (
    <div className="navbar__container">
      <div className="image__container">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify-logo"
        />
      </div>
      <div className="menu__navbar__container">
        <MenuNavbar icon={<AddHomeWorkIcon />} name="Home" />
        <MenuNavbar icon={<SearchIcon />} name="Search" />
        <MenuNavbar icon={<VideoLibraryIcon />} name="Your Library" />
      </div>
      <div className="playlist__container">
        <p className="playlist__title">playlists</p>

        <div className="playlist__content__container">
          {playlists? (
            playlists?.body?.items?.map((playlist) => (
              <MenuNavbar key={playlist.id} name={playlist.name} />
            ))
          ): ("no playlists")}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
