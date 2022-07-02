import { Person, Chat, Notifications, Search } from '@mui/icons-material';

import logo from '../../logo-40.jpg';
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
				<img src="data:image/jpeg;base64,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" alt="" className="topbarImg" />
			</div>
			
		</div>
    </div>
  )
}

export default Topbar;