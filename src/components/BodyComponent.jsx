import "./BodyComponent.css";
import SongRow from "./SongRow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SpotifyWebApi from "spotify-web-api-node";
import { useDataLayerValue } from "./DataLayer/DataLayer";
import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";

const BodyComponent = ({ name, type }) => {
  return (
    <>
      <div className="body__element">
        <div className="body__element__album">
          <img src={type?.body?.images[0].url} alt="album" />
          <div className="body__element__info">
            <h2>PLAYLIST</h2>
            <h1>{name}</h1>
            <p>{type?.body?.description}</p>
          </div>
        </div>
        <div className="body__element__songs">
          <div className="body__element__icons">
            <StopCircleIcon />
            <FavoriteIcon style={{ color: "var(--color-green)" }} />
            <MoreHorizIcon />
          </div>
          {type?.body?.tracks?.items?.map((item, index) => {
            const count = index + 1;
            return <SongRow track={item.track} key={count} number={count} />;
          })}
        </div>
      </div>)
    </>
  );
};

export default BodyComponent;

export const BodyComponentTwo = ({ name, type }) => {

  const s = new SpotifyWebApi();
  const [{ token }, dispatch] = useDataLayerValue();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
       s.setAccessToken(token);
      s.getRecommendations({ min_energy: 0.4, seed_artists: ['2N72bJ8IYB4KZmKmxz5Xkk', '4DYFVNKZ1uixa6SQTvzQwJ'], min_popularity: 50 }).then((recommend_list) => {
      setLoading(true);
         dispatch({
            type: "GET_RECOMMEND",
            recommend_list: recommend_list,
         });
      });
  }, [token, dispatch]);

  return (
    <>
      {loading ? (
      <div style={{color: "white"}} className="container__recommend__list">
        <h1>Recommend list</h1>
        <div className="recommand__cards__wrapper">
           {type?.body?.tracks?.map((item, index) => { 
             let count = index + 1 
             return ( 
               <> 
                 <div key={count} className="card__recommend"> 
                   <img src={item?.album?.images[0].url} alt="image card recommend" /> 
                    <p>{item.name}</p>
                    <p>artists: {item?.album.artists[0].name}</p> 
                    <p>count: {item.album.total_tracks}</p> 
                 </div> 
               </> 
             ); 
           })} 
        </div>
      </div>
      ): (<Loading /> ) }
    </>
  );
};
