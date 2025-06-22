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
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://wei-cook-cms-site.vercel.app/homecms"
              className="nav-link"
            >
              Edit
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://wei-cook-cms-site.vercel.app/login"
              className="btn btn-primary ms-lg-3"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
