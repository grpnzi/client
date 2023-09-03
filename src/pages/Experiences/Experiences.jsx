import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FlagDisplay from "../../components/FlagDisplay";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Experiences.css'

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
      <FlagDisplay location={location} />
      <button onClick={() => filterExperience("Xtreme")}>Xtreme</button>
      <button onClick={() => filterExperience("Cultural")}>Cultural</button>
      <button onClick={() => filterExperience("Gastronomic")}>Gastronomic</button>
      {!experienceFiltered ? <p>Choose your experience</p> :
        <>
          {!experienceFiltered ? (
            <p>Setting your experiences...</p>
          ) : (
            <>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                {experienceFiltered.map((experience) => (
                  <div className="p-2" key={experience._id}>
                    <Card style={{ width: "18rem" }} className="h-100">
                      <Card.Img
                        variant="top"
                        src={experience.imageUrl}
                        className="card-img-fixed-height"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>{experience.title}</Card.Title>
                        <Card.Text>{experience.experienceType}</Card.Text>
                        <Card.Text>${experience.price}</Card.Text>
                        <Link to={`/country/${location}/${experience._id}`}>
                          <Button variant="primary">Read more...</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      }
    </>
  );
}
export default Experiences;
