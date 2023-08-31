import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'








function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    // <div className="LoginPage">
    //   <h1>Login</h1>

    //   <form onSubmit={handleLoginSubmit}>
    //     <label>Email:</label>
    //     <input type="email" name="email" value={email} onChange={handleEmail} />

    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePassword}
    //     />

    //     <button type="submit">Login</button>
    //   </form>
    //   {errorMessage && <p className="error-message">{errorMessage}</p>}

    //   <p>Don't have an account yet?</p>
    //   <Link to={"/signup"}> Sign Up</Link>
    // </div>


<form onSubmit={handleLoginSubmit} className="text-center mt-5">
  <div className="form-row">
    <div className="col-md-5 mx-auto mb-3">
      <label htmlFor="inlineFormInputGroup">Email</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">
  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
</svg>          </span>
        </div>
        <input
          type="email"
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
      </div>
    </div>
    <div className="col-md-5 mx-auto mb-3">
      <label htmlFor="inputPassword6">Password</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>          </span>
        </div>
        <input
          type="password"
          id="inputPassword6"
          className="form-control"
          aria-describedby="passwordHelpInline"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <small id="passwordHelpInline" className="text-muted">
        Must be 8-20 characters long.
      </small>
    </div>
    <div className="col-md-6 mx-auto mb-3 d-flex justify-content-between">
      <div className="form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          id="autoSizingCheck"
        />
        <label className="form-check-label" htmlFor="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div className="col-md-6 mx-auto mb-3">
      <button type="submit" className="btn btn-primary">Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Don't have an account yet?</p>
      <Link to="/signup">Sign Up</Link>
    </div>
  </div>
</form>


  );
}








export default LoginPage;
