import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-node";
import { useDataLayerValue } from "./components/DataLayer/DataLayer";
import { getTokenFromUrl } from "./spotify";
import Loading from "./components/Loading/Loading";

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
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });
    }
  }, [token, dispatch]);

   return(
      <>
          {token ?  <Player />  : <Login /> }
      </>
   )
}

export default App;
