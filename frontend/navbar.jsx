import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        SOA <span>englishcafe</span>
      </div>

      <ul className="nav-links">
        <li>About</li>
        <li>Events</li>
        <li>Memories</li>
        <li>Newsletters</li>
      </ul>

      <button className="register-btn">Register</button>
    </nav>
  );
}
export default Navbar;