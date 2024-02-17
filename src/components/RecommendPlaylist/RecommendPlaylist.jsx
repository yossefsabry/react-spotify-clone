import React, { useEffect } from 'react';
import "./RecommendPlaylist.css";
import Header from '../Header'
import CopyWrite from '../CopyWrite/CopyWrite';
import SpotifyWebApi from 'spotify-web-api-node';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import Loading from "../Loading/Loading";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from '../SongRow';


const RecommendPlaylist = () => {
  const s = new SpotifyWebApi();
  const [{ token, recommend_playlist, id_recommend_playlist  }, dispatch] = useDataLayerValue();

  useEffect(() => {
    if (token !== null && id_recommend_playlist !== null) {
    s.setAccessToken(token);
    s.getAlbum(`${id_recommend_playlist}`).then((response) => {
      dispatch({
        type: "SET_RECOMMEND_PlAYLIST",
        recommend_playlist: response,
      })
    })
    }
  }, [dispatch, id_recommend_playlist]);

  return (
    <div className='recommoend__playlist__wrapper'>
      <Header />
          <div className="playlist__info__wrapper">
            <img src={recommend_playlist.body.images[0].url} alt="album" />
            <div className="playlist__info__content">
              <h2>PLAYLIST</h2>
              <h1>{recommend_playlist?.body.name}</h1>
              <p>{recommend_playlist?.body.description || "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur"}</p>
            </div>
          </div>
          <div className="body__element__songs">
            <div className="body__element__icons">
              <StopCircleIcon />
              <FavoriteIcon style={{ color: "var(--color-green)" }} />
              <MoreHorizIcon />
            </div>
          </div>
          {recommend_playlist?.body?.tracks?.items?.map((item, index) => {
            const count = index + 1;
            return <SongRow album={false} img={recommend_playlist?.body.images} track={item} key={count} number={count} />;
          })}

      <CopyWrite />
    </div>
  )
}

export default RecommendPlaylist
