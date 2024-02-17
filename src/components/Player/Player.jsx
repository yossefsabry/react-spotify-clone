import Body, { BodyTwo } from "../Body/Body";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Player.css";
import { Routes, Route } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Playlist from "../Playlist/Playlist";
import Loading from "../Loading/Loading";
import LovePlaylist from "../LovePlaylist/LovePlaylist";
import RecommendPlaylist from "../RecommendPlaylist/RecommendPlaylist";

const Player = () => {
  const [{ discover_weekly, recommend_list, loading }] = useDataLayerValue();
  // console.log(recommend_list);

  return (
    <>
      {loading ? (
        <div className="player-contaienr" style={{ background: "black" }}>
          <div className="content-container">
            <Navbar />
            <Routes>
              <>
                <Route
                  path="/"
                  element={
                    <Body name="Discover Weekly" type={discover_weekly} />
                  }
                />
                <Route
                  path="/recommend"
                  element={
                    <BodyTwo name="Recommend List" type={recommend_list} />
                  }
                />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/topSong" element={<LovePlaylist />} />
                <Route path="/recommend/playlist" element={<RecommendPlaylist />} />
              </>
            </Routes>
          </div>
          <div className="player-song" style={{ background: "black" }}>
            <Footer />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Player;
