import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";


function UserProfile() {
  const { user } = useContext(AuthContext);
  console.log(user)


if (user){
  return <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <button className="btn-secondary">
            <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" height="95" width="95" />
          </button>
          <span className="name mt-3">{user.name} </span>
          <span className="idd">{user.email} </span>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">12 <span className="follow">Comments</span></span>
          </div>
          <div className="d-flex mt-2">
            <button className="btn1 btn-dark">Edit Profile</button>
          </div>
          <div className="text mt-3">

          </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span><i className="fa fa-twitter"></i></span>
            <span><i className="fa fa-facebook-f"></i></span>
            <span><i className="fa fa-instagram"></i></span>
            <span><i className="fa fa-linkedin"></i></span>
          </div>
        </div>
      </div>
    </div>
}

else {
  return(<h2>loading...</h2>)
}


}

export default UserProfile;