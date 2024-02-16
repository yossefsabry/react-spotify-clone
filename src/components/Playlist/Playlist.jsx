import "./Playlist.css";
import Header from "../Header";
import CopyWrite from "../CopyWrite/CopyWrite";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import SongRow from "../SongRow";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Loading from "../Loading/Loading";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Playlist = () => {
  const [{ playlist_user, token, playlist_id, playlist_info }, dispatch] = useDataLayerValue();
  const [loading, setLoading] = useState(false);

  const s = new SpotifyWebApi();

  useEffect(() => {
    // updata setLoading for every time show the laoding
    setLoading(false);
    if (token && playlist_id !== undefined) {
      s.setAccessToken(token);
      s.getPlaylistTracks(`${playlist_id}`).then((response) => {
        setLoading(true);
        dispatch({
          type: "SET_PLAYLIST_USER",
          playlist_user: response,
        });
      });
      s.getPlaylist(`${playlist_id}`).then((response) => {
        dispatch({
          type: "SET_INFO_PLAYLIST",
          playlist_info: response,
        });
      });
    }
    // if you adding the playlist_user there is and infinit loop for useEffect
  }, [playlist_id]);

  return (
    <>
      {loading ? (
        <div className="playlist__wrapper">
          {" "}
          <Header />
          <div className="playlist__info__wrapper">
            <img src={playlist_info?.body?.images[0].url} alt="album" />
            <div className="playlist__info__content">
              <h2>PLAYLIST</h2>
              <h1>{playlist_info.body?.name}</h1>
              <p>{playlist_info?.body?.description || "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur"}</p>
            </div>
          </div>
          <div className="body__element__songs">
            <div className="body__element__icons">
              <StopCircleIcon />
              <FavoriteIcon style={{ color: "var(--color-green)" }} />
              <MoreHorizIcon />
            </div>
          </div>
          {playlist_user?.body?.items?.map((item, index) => {
            const count = index + 1;
            return <SongRow track={item.track} key={count} number={count} />;
          })}
          <CopyWrite />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Playlist;
