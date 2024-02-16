import React, { useEffect, useRef, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import CopyWrite from "../CopyWrite/CopyWrite";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Header from "../Header";
import Loading from "../Loading/Loading";
import SongRow from "../SongRow";
import "./LovePlaylist.css";

const LovePlaylist = () => {
  const [loading, setLoading] = useState(false);
	const s = new SpotifyWebApi();
	const [{ token, top_tracks }, dispatch] = useDataLayerValue();

	const scrollContainerRef = useRef();
	const [scrollState, setScrollState] = useState(false);

	const handleScroll = () => {
		const container = scrollContainerRef.current;
		if (container) {
			const scrollPosition = container.scrollTop;
			if (scrollPosition > 300) {
				setScrollState(true);
			} else {
				setScrollState(false);
			}
		}
	};

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
			return () => {
				container.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

  useEffect(() => {
		if (token) {
			s.setAccessToken(token);
			s.getMyTopTracks().then((response) => {
				dispatch({
					type: "TOP_TRACKS",
					top_tracks: response,
				});
			});
      setLoading(true);
		}
  }, [dispatch])

	return (
		<>
      { loading ? (

			<div className="love__playlist__container" ref={scrollContainerRef}>
				<Header scroll_state={scrollState} />
        <h2 style={{padding: "20px", textDecoration: "underline"}}>Top Songs</h2>

          {top_tracks?.body?.items?.map((item, index) => {
            const count = index + 1;
            return <SongRow track={item} key={count} number={count} />;
          })}
				<CopyWrite />
			</div>) :
      (<Loading />) 
      }
		</>
	);
};

export default LovePlaylist;
