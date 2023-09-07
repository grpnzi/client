import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function DeleteExperience(props) {
  const navigate = useNavigate();
  const { location } = props;
  const { user } = useContext(AuthContext);
  const { experienceId } = useParams();

  const handleDelete = (event) => {
    event.preventDefault();
    const apiUrlDelete = `${process.env.REACT_APP_SERVER_URL}/experience/delete/${experienceId}`;
    fetch(apiUrlDelete, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <>
      {user?.admin && (
        <div>
          <Link to={`/country/${location}/experiences`}>
            <button className="text-center btn btn-sm btn-danger rounded border border-warning"
            style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }} onClick={(event) => handleDelete(event)}>Delete</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default DeleteExperience;
