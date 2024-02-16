import Body, { BodyTwo } from "../Body/Body";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Player.css";
import { Routes, Route } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Playlist from "../Playlist/Playlist";
import { Copyright } from "@mui/icons-material";

const Player = () => {

  const [{discover_weekly, recommend_list}] = useDataLayerValue(); 
  // console.log(recommend_list);
  return (
    <div className="player-contaienr" style={{ background: "black" }}>
      <div className="content-container">
        <Navbar />
        <Routes>
          <>
            <Route path="/" element={<Body name="Discover Weekly" type={discover_weekly}/>} />
            <Route path="/recommend" element={<BodyTwo name="Recommend List" type={recommend_list} />}/>
            <Route path="/playlist" element={<Playlist />} />
          </>
        </Routes>
      </div>
      <div className="player-song" style={{ background: "black" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Player;
