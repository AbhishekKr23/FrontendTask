import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Site</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
