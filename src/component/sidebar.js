import logo from '../assets/img/icon.png';
import profile from '../assets/img/profile.png'
import user from '../assets/img/user.svg'
import subscribe from '../assets/img/bill.svg'
import logout from '../assets/img/logout.svg'

import { Link } from 'react-router-dom'

import '../pages/style.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <img src={logo} alt="logo" className="sidebar-logo" />
                <img src={profile} alt="profile-icon" className="sidebar-profile" />
                <p className="fw-bold text-center">Egi Ganteng</p>
                <p className="text-danger text-center">Not Subscribe Yet</p>
                <hr />
                <div className="sidebar-menu">
                    <Link className="sidebar-link" to="/">
                        <img src={user} alt="user-icon" />
                        <span className="text-sidebar">Profile</span>
                    </Link>
                </div>
                <div className="sidebar-menu">
                    <Link className="sidebar-link" to="/subscribe">
                        <img src={subscribe} alt="subscribe-icon" />
                        <span className="text-sidebar">Subscribe</span>
                    </Link>
                </div>
                <hr />
                <div className="sidebar-menu">
                    <Link to="/" className="sidebar-link">
                        <img src={logout} alt="logout-icon" />
                        <span className="text-sidebar">Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;