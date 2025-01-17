import "./index.css";
import Icons from "../Icons/Icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Header() {
  const { mobileMenu, setMobileMenu } = useContext(GlobalContext);
  const { pathname } = useLocation();

  function toggleMobileMenu() {
    setMobileMenu((prevState) => !prevState);
  }

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname, setMobileMenu]);

  return (
    <header className="header">
      <div className="header__top d-flex-row justify-content-between">
        <Link to="/" title="Home" className="icons icons--home">
          <span>
            <svg
              fill="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88.0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839.0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819.0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838.0.819-.51 1.583-1.328 1.847M13.68 8.798l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
          </span>
        </Link>
        <Link to="/" className="icons">
          <img
            className="header__top__logo img-fluid"
            src="https://www.motor.com.co/__export/1642075807000/sites/motor/arte/coresites/motor/logo_footer.svg"
            alt="Home"
          />
        </Link>
        <div className="header__actions">
          {/* DESKTOP MENU */}
          <Icons></Icons>
          {/* MOBILE MENU */}
          <div className="menuburger">
            <button className="btn" type="button" onClick={toggleMobileMenu}>
              {mobileMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <nav className={`header__nav ${mobileMenu ? "active" : ""} `}>
        <ul>
          <li className="nav-link">
            <NavLink to="/category/tecnologia">Tecnologia</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/category/industria">Industria</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/category/deportes">Deportes</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/my">Sobre mí</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
