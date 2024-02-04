import { useDataLayerValue } from './DataLayer/DataLayer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = (props) => {
  const styleHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    position: 'sticky',
    width: "100%",
    zIndex: '4',
    left: "0px",
    top: "0",
    padding: "25px 5px 25px 15px",
    transition: "all .3s", // not working for the change of the bg in header
    background: props.scroll_state ? "linear-gradient( var(--dark-green), var(--gray-bg))" : "none",
  };
  const styleInputHeader = {
    color: 'white',
    backgroundColor: '#282828',
    border: '1px solid #282828',
    borderRadius: '30px',
    padding: '10px',
    width: 'calc(40vw - 200px)',
    minWidth: '100px',
    outline: 'none',
  }
  const headerStyleRight = {
    display: 'flex',
    alignItems: 'center',
    width: '200px',
    justifyContent: 'center',
  }

  const styleAvatar = {
    height: '40px',
    width: '40px',
    objectFit: 'contain',
    borderRadius: '50%',
    marginRight: '10px',
  }

  const [{ user }] = useDataLayerValue();

  const handleScroll = () => {
    console.log("welcome");
  }
  // handle scroll
  return (
    <div className='header__body' style={styleHeader} onScrollCapture={handleScroll} >
      <div className='header__left'>
        <input
          placeholder='Search for Artists, Songs, or Podcasts'
          type='text'
          style={styleInputHeader}
        />
      </div>
      <div className='header__right' style={headerStyleRight}>
        <img src={user?.body?.images[0].url} alt='avatar' style={styleAvatar}/>
        <h5 style={{fontWeight: "400"}}>{user?.body?.display_name}</h5>
        <ExpandMoreIcon style={{cursor: "pointer"}}/>
      </div>
    </div>
  )
}

export default Header;
