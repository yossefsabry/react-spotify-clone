import { useDataLayerValue } from './DataLayer/DataLayer'
import './DescoverWeekly.css'
import SongRow from './SongRow'
import StopCircleIcon from '@mui/icons-material/StopCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const DescoverWeekly = () => {

  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='discover__weekly' >
      <div className="discover__weekly__album">
        <img src={discover_weekly?.body?.images[0].url} alt='album' />
        <div className="discover__weekly__info">
          <h2>PLAYLIST</h2>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.body?.description}</p>
        </div>
      </div>
      <div className="discover__weekly__songs">
        <div className="discover__weekly__icons">
          <StopCircleIcon />
          <FavoriteIcon style={{color: "var(--color-green)"}}/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.body?.tracks.items.map((item, index) => {
          const count = index + 1;
          return (<SongRow track={item.track} key={count}  />)
        })}
      </div>
    </div>
  )
}

export default DescoverWeekly
