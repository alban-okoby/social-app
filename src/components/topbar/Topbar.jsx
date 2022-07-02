import { Person, Chat, Notifications, Search } from '@mui/icons-material';

import logo from '../../logo-40.jpg';
import profileImg from '../../assets/image/profile.png';
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
		<div className="topbarLeft">
			<div className="logo">
				<img src={logo} className="logoImg" />
				<span className="logoName">DigitalSouag </span>
			</div>
		</div>
		<div className="topbarCenter">
			<div className="searchBar">
				<Search className="searchIcon"/>
				<input type="search" placeholder="Retrouvez des amis" />
			</div>
		</div>
		<div className="topbarRight">
			<div className="topbarLinks">
				<div className="topbarLink">Accueil</div>
				<div className="topbarLink">Autre</div>
			</div>
			<div className="topbarIcons">
				<div className="topbarIconItem">
					<Person />
					<span className="topbarIconBadge">1</span>
				</div>
				<div className="topbarIconItem">
					<Chat />
					<span className="topbarIconBadge">3</span>
				</div>
				<div className="topbarIconItem">
					<Notifications />
					<span className="topbarIconBadge">17</span>
				</div>
				<img src={profileImg} alt="" className="topbarImg" />
			</div>
			
		</div>
    </div>
  )
}

export default Topbar;