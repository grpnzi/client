import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function DeleteExperience() {
  
  const { experienceId } = useParams();
console.log(experienceId);
  const handleDelete = (  event) => {
    event.preventDefault()
      const apiUrlDelete = `${process.env.REACT_APP_SERVER_URL}/experience/delete/${experienceId}`;
      fetch(apiUrlDelete, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .catch(err => console.log('Error: ', err))

  };

  return (
    <div>
        <Link to={`/`}>
      <button onClick={(event)=>handleDelete(event)}>Delete</button>
      </Link>
    </div>
  );
}

export default DeleteExperience;
