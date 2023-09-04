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
      <h2>Three Unique Experiences</h2>
      <ul className="list-down">
        <li><strong>Xtreme Adventures:</strong> Seek the adrenaline rush? Our Xtreme experiences are designed to thrill, from scaling towering peaks to diving into the depths of the ocean, pushing boundaries and igniting your sense of adventure.</li>
        <li><strong>Cultural Immersion:</strong> We believe the heart of any journey lies in its culture. Delve deep into traditions, history, and vibrant customs through our Cultural experiences. Engage with local communities, participate in ancient rituals, and gain insights that go beyond the surface.</li>
        <li><strong>Gastronomic Delights:</strong> Food is a universal language, and our Gastronomic experiences celebrate the world's culinary treasures. Discover a country's soul through its flavors, savoring street food delicacies to fine dining in historic settings, all while uncovering the stories behind each dish.</li>
      </ul>
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
                          <button className="h-10" >Read more...</button>
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
