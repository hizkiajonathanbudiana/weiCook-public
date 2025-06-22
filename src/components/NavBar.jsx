import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold" to="/">
          WeiCook
        </Link>

        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/edit">
              Edit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary ms-lg-3" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
