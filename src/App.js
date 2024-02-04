import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-node";
import { useDataLayerValue } from "./components/DataLayer/DataLayer";
import { getTokenFromUrl } from "./spotify";

const s = new SpotifyWebApi();
function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // make the url empty for security
    let _token = hash.access_token;
    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      s.getPlaylist("37i9dQZEVXcJNY5yF2p7ZE").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      // s.getRecommendations({ min_energy: 0.4, seed_artists: ['2N72bJ8IYB4KZmKmxz5Xkk', '4DYFVNKZ1uixa6SQTvzQwJ'], min_popularity: 50 }).then((recommend_list) => {
      //    dispatch({
      //       type: "GET_RECOMMEND",
      //       recommend_list: recommend_list,
      //    });
      // });
    }
  }, [token, dispatch]);

   return(
      <>
         {token ? <Player /> : <Login />}
      </>
   )
}

export default App;
