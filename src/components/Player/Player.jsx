import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Player.css";
import { Routes, Route } from "react-router-dom";

const Player = () => {
  return (
    <div className="player-contaienr" style={{background: "black"}}>
      <div className="content-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/recommend" element={<h1>welcome </h1>} />
        </Routes>
      </div>
      <div className="player-song" style={{background: "black"}}>
        <Footer />
      </div>
    </div>
  );
};

export default Player;
