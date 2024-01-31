import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-node";
import { useDataLayerValue } from "./components/DataLayer/DataLayer";
import { getTokenFromUrl } from "./spotify";

const s = new SpotifyWebApi();
function App() {
  const [ { token } , dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // make the url empty for security
    let _token = hash.access_token;
    if (_token) {
      s.setAccessToken(_token);
      console.log(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
    }
  }, []);

  console.log("Token", token);

  return (
    <>
      {token ? <Player /> : <Login />}
    </>
  );
}

export default App;

