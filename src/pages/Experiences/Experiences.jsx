import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Experiences() {
  const { location } = useParams();
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/${location}/experience`;

  const [experienceFiltered, setExperienceFiltered] = useState(null);

  const [experience, setExperience] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setExperience(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function filterExperience(experienceType) {
    const experienceFiltered = experience.filter((experience) => {
      return experience.experienceType === experienceType;
    });
    console.log(experienceFiltered);
    setExperienceFiltered(experienceFiltered);
  }

  return (
    <>
    <h1>{location}</h1>
      <button onClick={() => filterExperience("Xtreme")}>Xtreme</button>
      <button onClick={() => filterExperience("Cultural")}>Cultural</button>
      <button onClick={() => filterExperience("Gastronomic")}>Gastronomic</button>
      {!experienceFiltered ? <p>Choose your experience</p>:
      <>
      {!experienceFiltered ? (
        <p>Setting your experiences...</p>
      ) : (
        <>
         
         {experienceFiltered.map((experience) => (
  <Card style={{ width: "18rem" }} key={experience._id}>
    <Card.Img variant="top" src={experience.imageUrl} />
    <Card.Body>
      <Card.Title>{experience.title}</Card.Title>
      <Card.Text>{experience.description}</Card.Text>
      <Link to={`/country/${location}/${experience._id}`} ><Button variant="primary">Go somewhere</Button></Link>
      
    </Card.Body>
  </Card>
))}


        </>

      )}
      </>
}
    </>
  );
}
export default Experiences;
