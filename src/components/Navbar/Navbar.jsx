
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-russo-one';
import 'typeface-montserrat'





function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar px-4 navbar-expand-lg navbar-light bg-light">

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Share&display=swap');
          .share-font {
            font-family: 'Share', sans-serif;
          }
        `}
      </style>
      
      <Link style={{ fontFamily: 'Russo One' }} className="navbar-brand ml-4" to="/">
        wildXperience
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end mr-4" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link style={{ fontFamily: 'Share', color:'black' }} className="nav-link font-weight-bold" to="/profile">
                {user && user.name}
                </Link>
              </li>
              <li style={{ fontFamily: 'Montserrat', color:'black' }} className="nav-item font-weight-bold">
                <button className="nav-link" onClick={logOutUser}>
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold share-font" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link share-font" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
