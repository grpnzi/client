import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { CartContext } from "../../context/cart.context";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-russo-one";
import "typeface-montserrat";
import { MDBIcon } from "mdb-react-ui-kit";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext); // Access the cart context

  const estiloFooter = {
    backgroundColor: "#FCE38A",
    height: "75px",
  };

  return (
    <nav style={estiloFooter} className="navbar px-4 navbar-expand-lg">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Share&display=swap');
          .share-font {
            font-family: 'Share', sans-serif;
          }

        `}
      </style>

      <Link
        style={{ fontFamily: "Russo One" }}
        className="navbar-brand ml-4"
        to="/"
      >
        <div className=" d-flex align-items-center mr-2">
          <p className="mb-0 mr-2">wildXperience</p>
          <img
            src={process.env.PUBLIC_URL + "/logo 3.png"}
            alt="Mi Logo"
            className="mr-2"
            style={{ width: "60px" }}
          />
        </div>
      </Link>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse ml-auto justify-content-end mr-4"
        id="navbarNav"
      >
        <ul className="navbar-nav " style={{backgroundColor: "#FCE38A"}}>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/search">
                  <img 
                    src={process.env.PUBLIC_URL + "/lupa-removebg-preview.png"}
                    alt="Mi Logo"
                    className="me-4 mt-2 position-relative"
                    style={{ width: "25px"  }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="mr-6">
                  <MDBIcon style={{color:"black", fontSize: "25px"}} icon="cart-plus" className="me-4 mt-2" >
                  {cart.length > 0 && (
                    <span style={{fontFamily:"Russo one", fontSize: "10px"}} className="badge bg-danger rounded-circle position-relative">
                      {cart.length}
                    </span>
                  )}
                  </MDBIcon>
                </Link>
              </li>
              {user?.admin && (
                <li className="nav-item">
                  <Link
                    style={{ fontFamily: "Share", color: "black" }}
                    className="nav-link font-weight-bold"
                    to="/create"
                  >
                    Create
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link
                  style={{ fontFamily: "Share", color: "black" }}
                  className="nav-link font-weight-bold"
                  to="/profile"
                >
                  {user && user.name}
                </Link>
              </li>
              <li
                style={{ fontFamily: "Share", color: "black" }}
                className="nav-item font-weight-bold"
              >
                <button
                  style={{ fontFamily: "Share", color: "black" }}
                  className="nav-link"
                  onClick={logOutUser}
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className="nav-item">
              <Link to="/search">
                  <img 
                    src={process.env.PUBLIC_URL + "/lupa-removebg-preview.png"}
                    alt="Mi Logo"
                    className="me-5 mt-3"
                    style={{ width: "20px"  }}
                  />

                </Link>
              </li>
              <li className="nav-item ml-auto d-flex justify-content-end">
                <Link
                  style={{ fontFamily: "Share", color: "black" }}
                  className="nav-link font-weight-bold share-font"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item ml-auto d-flex justify-content-end">
                <Link
                  style={{ fontFamily: "Share", color: "black" }}
                  className="nav-link share-font"
                  to="/login"
                >
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
