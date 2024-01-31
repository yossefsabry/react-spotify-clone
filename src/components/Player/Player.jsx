import { useDataLayerValue } from "../DataLayer/DataLayer";
import "./Player.css";

const Player = () => {
  const [ {user} ] = useDataLayerValue();
  console.log("----------------", user);
  return (
    <div>welcome form the welcome page</div>
  );
};

export default Player;
