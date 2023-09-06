import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import SearchBar from "../components/SearchBar";
import {Link } from "react-router-dom";

function AllExperiences() {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/experiences`;
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [tagSearchTerm, setTagSearchTerm] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExperiences(data);
        setFilteredExperiences(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterExperiences = (tag) => {
    const filtered = experiences.filter((experience) => {
      if(tag === ""){
        return true
      }
      else if(tag){
        const tagMatch =
          tag && experience.tags.join("").toLowerCase().includes(tag.toLowerCase());
          return tagMatch

      }

    });

    setFilteredExperiences(filtered);
  };

  const handleTagSearch = (tag) => {
    setTagSearchTerm(tag);
    filterExperiences(tag);
  };


  return (
    <>
      <SearchBar
        onTagSearch={handleTagSearch}
      />

      {filteredExperiences.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
          {filteredExperiences.map((experience) => (
            <div className="p-2" key={experience._id}>
              <Link to= {`/country/${experience.location}/${experience._id}`}>
              <Card
                style={{ width: "18rem", backgroundColor: "white" }}
                className="h-100"
              >
                <Card.Img
                  variant="top"
                  src={experience.imageUrl}
                  className="card-img-fixed-height"
                />
                <Card.Body className="text-center d-flex flex-column align-items-center">
                  <Card.Title style={{ fontFamily: "Share" }}>
                    {experience.title}
                  </Card.Title>
                  <Card.Text style={{ color: "grey", fontFamily: "Russo One" }}>
                    {experience.experienceType}
                  </Card.Text>
                  <Card.Text
                    style={{ color: "black", fontFamily: "Russo One" }}
                  >
                    ${experience.price}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No experiences found.</p>
      )}
    </>
  );
}

export default AllExperiences;
