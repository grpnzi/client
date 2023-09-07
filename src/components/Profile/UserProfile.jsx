import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { CloudinaryContext, Image } from "cloudinary-react";
import "typeface-russo-one";

function UserProfile() {
  const { user, updateState } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken } = useContext(AuthContext);

  const handleNameInput = (e) => setName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "qh39k8v5"); // Replace with your Cloudinary upload preset

    fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url); // Set the image URL returned by Cloudinary
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const urlApi = `${process.env.REACT_APP_SERVER_URL}/profile/edit/${user._id}`;
    const requestBody = { email: email, name: name, img: image, user };
    console.log(requestBody);

    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        storeToken(data.authToken);
        updateState(data.payload);
        setEdit(false);
      })
      .catch((error) => console.error("Error uploading image: ", error));
  };

  if (user) {
    return (
      <>
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Share&display=swap');
          .share-font {
            font-family: 'Share'
          }

        `}
      </style>


        {edit ? (
          <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
              <form
                onSubmit={(e) => handleEditSubmit(e)}
                className="text-center mt-3"
              >
                <div className="image d-flex flex-column justify-content-center align-items-center">
                  {image ? (
                    <div>
                      <CloudinaryContext
                        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                      >
                        <Image publicId={image} width="150" />
                      </CloudinaryContext>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={user.img}
                        alt={user.name}
                        height="95"
                        width="95"
                      />
                    </div>
                  )}
                  <div className="col-lg-12 mx-auto mb-3 mt-5">
                    <label className="mb-1 smaller-label" style={{ fontFamily: 'Russo One'}} htmlFor="image">
                      Profile Image
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="24"
                            className="bi bi-file-earmark-arrow-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
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
                  </div>
                  <div className="form-row w-100">
                    <div className="col-lg-12 mx-auto mb-3">
                      <label className="mb-1" style={{ fontFamily: 'Russo One'}} htmlFor="mail">Email</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="24"
                              fill="currentColor"
                              className="bi bi-at"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                            </svg>{" "}
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Email"
                          name="mail"
                          value={email}
                          onChange={handleEmailInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mx-auto mb-3">
                    <label className="mb-1" style={{ fontFamily: 'Russo One'}} htmlFor="name">Name</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="24"
                            fill="currentColor"
                            className="bi bi-person"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                          </svg>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mx-auto mb-3 mt-3">
                  <button style={{ fontFamily: 'Share'}} type="submit" className="btn1 btn-blue editBtn">
                    EDIT
                  </button>
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </div>
              </form>
              <div className="d-flex mt-2 d-flex justify-content-center">
                <button
                style={{ fontFamily: 'Share'}}
                  className="btn1 btn-dark"
                  onClick={() => {
                    setEdit(false);
                    setEmail(null);
                  }}
                >
                  CANCEL
                </button>
              </div>
              <div className="text mt-3"></div>
            </div>
          </div>






        ) : (





          <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
              <div className="image d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img src={user.img} alt={user.name} height="95" width="95" />
                </div>
                {<span style={{fontFamily: 'Share'}} className="name mt-3">{user.name} </span>}
                <span className="idd">{user.mail} </span>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                </div>
                <div className="d-flex mt-2">
                  <button
                    className="btn1 btn-dark text-center btn btn-sm rounded border border-warning"
                    style={{ width: '160px', color:'white', maxHeight: '45px', fontFamily: 'Share', fontSize: '16px' }}
                    onClick={() => {
                      setEdit(true);
                      setEmail(user.email);
                      setName(user.name);
                      setImage(user.img);
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="text mt-3"></div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default UserProfile;
