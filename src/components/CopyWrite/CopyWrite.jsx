import React from "react";
import { Link } from "react-router-dom";
import "./CopyWrite.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const CopyWrite = () => {
	return (
		<>
			<div className="copy__container">
				<div className="content__copy">
					<div className="content__wrapper">
						<h3>Company</h3>
						<ul>
							<li>About</li>
							<li>Jobs</li>
							<li>For The Record</li>
						</ul>
					</div>
					<div className="content__wrapper">
						<h3>Communitls</h3>
						<ul>
							<li>For Artist</li>
							<li>Developers</li>
							<li>Advertisting</li>
							<li>Investors</li>
							<li>Vendors</li>
						</ul>
					</div>
					<div className="content__wrapper">
						<h3>Useful Links</h3>
						<ul>
							<li>Support</li>
							<li>Free Mobile App</li>
						</ul>
					</div>
				</div>
				<div className="icons__copy">
          <InstagramIcon className="icons__social"/>
          <TwitterIcon className="icons__social"/>
          <FacebookIcon className="icons__social"/>
        </div>
			</div>
			<div className="more__copy">
        <div className="link__copy">
          <Link to="#"> Legal</Link>
          <Link to="#">Privacy Policy </Link>
          <Link to="#">Privacy Center </Link>
          <Link to="#">Cookies </Link>
          <Link to="#">About Ads</Link>
          <Link to="#">Accessiablty</Link>
        </div>
        <p>© 2024 Spotify AB </p>
      </div>
		</>
	);
};

export default CopyWrite;
