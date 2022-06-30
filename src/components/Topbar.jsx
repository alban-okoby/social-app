import "./style/topbar.css";
import { Person, Chat, Notifications, Search } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbarContainer">
		<div className="topbarLeft">
			<span className="logo">SocialApp</span>
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
				<img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" className="topbarImg" />
			</div>
			
		</div>
    </div>
  )
}

export default Topbar;