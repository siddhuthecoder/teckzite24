
import { Link } from 'react-router-dom';
import Style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={Style.error}>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/event-details">Event Details</Link>
      <Link to="/workshops-details">Workshop Details</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/referrals">Referrals</Link>
      <Link to="/register">Register</Link>
      <Link to="/core-team">Core Team</Link>
      <Link to="/web-team">Web Team</Link>
      <Link to="/speakers">Speakers</Link>
      <Link to="/sponsors">Sponsors</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/about">About</Link>
      <Link to="/event-updates">Event Updates</Link>
    </div>
  );
}

export default NavBar;
