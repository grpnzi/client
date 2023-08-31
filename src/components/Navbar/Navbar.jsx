
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
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logOutUser}>
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <span className="nav-link">{user && user.name}</span>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link style={{ fontFamily: 'Montserrat', color:'black' }} className="nav-link font-weight-bold" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ fontFamily: 'Montserrat', color:"black" }} className="nav-link" to="/login">
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
// <nav>
//   <Link to="/">
//     <button>Home</button>
//   </Link>

//   {isLoggedIn && (
//     <>
//       <button onClick={logOutUser}>Logout</button>

//       <Link to="/profile">
//         <button>Profile</button>
//         {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
//       </Link>

//       <span>{user && user.name}</span>
//     </>
//   )}

//   {!isLoggedIn && (
//     <>
//       <Link to="/signup">
//         {" "}
//         <button>Sign Up</button>{" "}
//       </Link>
//       <Link to="/login">
//         {" "}
//         <button>Login</button>{" "}
//       </Link>
//     </>
//   )}
// </nav>

export default Navbar;
