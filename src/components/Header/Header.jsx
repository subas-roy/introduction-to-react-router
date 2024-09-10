import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav >
        <span>My Website</span>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About US</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;