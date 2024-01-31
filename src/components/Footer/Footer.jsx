import React from "react";
import "./Footer.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import img from "../../assests/image.avif";
import HistoryIcon from "@mui/icons-material/History";
import UpdateIcon from "@mui/icons-material/Update";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import DevicesIcon from "@mui/icons-material/Devices";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

const Footer = () => {
  return (
    <div className="footer__player">
      <div className="footer__left">
        <img src={img} alt="image song " />
        <div className="content">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
        <AttachFileIcon className="icon__footer" />
      </div>
      <div className="footer__center">
        <div className="content__footer_center">
          <div className="footer__contorls">
            <HistoryIcon className="icon__footer" />
            <SkipPreviousIcon className="icon__footer" />
            <PauseCircleIcon className="icon__footer" style={{fontSize: "2.8rem",}}/>
            <SkipNextIcon className="icon__footer" />
            <UpdateIcon className="icon__footer" />
          </div>
          <div className="player__slider">
            <p>0:00</p>
            <div className="slider">
              <div className="slider__track"></div>
            </div>
            <p>3:00</p>
          </div>
        </div>
      </div>
      <div className="footer__right">
          <div className="footer__right__left">
            <FavoriteIcon className="icon__footer" style={{color: "#529954"}}/>
            <DevicesIcon className="icon__footer" />
            <GraphicEqIcon className="icon__footer" />
          </div>
          <div className="slider">
            <VolumeDownIcon className="icon__footer" />
            <span className="slider__track"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
