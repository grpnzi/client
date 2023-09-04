
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-russo-one';
import 'typeface-montserrat'
import { Button } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";






function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const estiloFooter = {
    backgroundColor: '#FCE38A',
    height: '75px'
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
      
      <Link style={{ fontFamily: 'Russo One' }} className="navbar-brand ml-4" to="/">
        <div className=" d-flex align-items-center mr-2">
          <p className="mb-0 mr-23">wildXperience</p>
          <img src={process.env.PUBLIC_URL + '/logo 3.png'} alt="Mi Logo" className="mr-2" style={{ width: '60px' }} />
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
      <div className="collapse navbar-collapse ml-auto justify-content-end mr-4" id="navbarNav">
        <ul className="navbar-nav">
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link style={{ fontFamily: 'Share', color:'black' }} className="nav-link font-weight-bold" to="/profile">
                {user && user.name}
                </Link>
              </li>
              <li style={{ fontFamily: 'Share', color:'black' }} className="nav-item font-weight-bold">
                <button className="nav-link" onClick={logOutUser}>
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
            <Link to="/cart" className="btn" style={{ padding: '5px 10px' }}>
  <MdAddShoppingCart className="me-2 bg-warning" style={{ fontFamily: 'Share', fontSize: '24px' }} />
  Add to Cart
</Link>
              <li className="nav-item ml-auto d-flex justify-content-end">
                <Link style={{ color: 'black'}} className="nav-link font-weight-bold share-font" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item ml-auto d-flex justify-content-end">
                <Link style={{ color: 'black'}}  className="nav-link share-font" to="/login">
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
