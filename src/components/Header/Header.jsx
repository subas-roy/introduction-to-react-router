import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav >
        <span>My Website</span>
        <Link to="/">Home</Link>
        <Link to="/about">About US</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;