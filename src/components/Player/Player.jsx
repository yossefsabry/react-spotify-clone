import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Player.css";

const Player = () => {
  return (
    <div className="player-contaienr">
      <div className="content-container">
        <Navbar />
        <Body />
      </div>
      <div className="player-song">
        <Footer />
      </div>
    </div>
  );
};

export default Player;
