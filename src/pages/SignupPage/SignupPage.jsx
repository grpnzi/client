import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { CloudinaryContext, Image } from 'cloudinary-react';
import 'bootstrap/dist/css/bootstrap.min.css'


function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'qh39k8v5'); // Replace with your Cloudinary upload preset

    fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url); // Set the image URL returned by Cloudinary
      })
      .catch((error) => console.error('Error uploading image: ', error));
  };


  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, image };

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (

    <div className="SignupPage">
      <form onSubmit={handleSignupSubmit} className="text-center mt-5 SignupPage">
        <div className="form-row">
          <div className="col-md-5 mx-auto mb-3">
            <label htmlFor="inlineFormInputGroup">Email</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" className="bi bi-at" viewBox="0 0 16 16">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                  </svg>          </span>
              </div>
              <input
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Email"
                name="email" value={email} onChange={handleEmail}
              />
            </div>
          </div>


          <div className="col-md-5 mx-auto mb-3">
            <label htmlFor="inlineFormInputGroup">Name</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
                 </span>
              </div>
              <input
                className="form-control"
                placeholder="Name"
                type="text" name="name" value={name} onChange={handleName}
              />
            </div>
          </div>

          <div className="col-md-5 mx-auto mb-3">
            <label htmlFor="inputPassword6">Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>          </span>
              </div>
              <input
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handlePassword}

              />
            </div>
            <small id="passwordHelpInline" className="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>

          <div className="col-md-5 mx-auto mb-3">
          <label htmlFor="inlineFormInputGroup">Profile Image</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" className="bi bi-file-image" viewBox="0 0 16 16">
                  <path d="M8.293 5.293a.5.5 0 0 1 .414-.121l2 1a.5.5 0 0 1 .293.455V11.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 2 11.5V4a1.5 1.5 0 0 1 1.5-1.5h4.793a.5.5 0 0 1 .414.121zM10.5 0A1.5 1.5 0 0 1 12 1.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-6A1.5 1.5 0 0 1 5 0h5.5z" />
                  <path d="M9.293 5.293a.5.5 0 0 1 .707 0L11.5 6.793l1.646-1.647a.5.5 0 0 1 .708.708L12.207 7.5l1.647 1.646a.5.5 0 1 1-.708.708L11.5 8.207l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 7.5 9.146 5.854a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </div>
            <input
              type="file"
              className="form-control"
              name="image"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
          {image && (
            <div className="mt-2">
              <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
                <Image publicId={image} width="150" />
              </CloudinaryContext>
            </div>
          )}
        </div>

          <div className="col-md-6 mx-auto mb-3 d-flex justify-content-between">
          </div>
          <div className="col-md-6 mx-auto mb-3">
            <button type="submit" className="btn btn-primary">Sign in</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div>
            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
          </div>

        </div>
    </form>
  </div>
)}

export default SignupPage;
