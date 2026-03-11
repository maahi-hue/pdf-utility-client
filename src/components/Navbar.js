import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        PDF<span>Fix</span>BD
      </Link>
      <div className="navbar-links">
        <Link to="/">Compress</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}
