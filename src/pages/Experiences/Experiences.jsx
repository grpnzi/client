import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FlagDisplay from "../../components/FlagDisplay";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Experiences.css'
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol,
   MDBIcon
} from 'mdb-react-ui-kit';

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
      <MDBContainer>
      <MDBRow>
        <MDBCol lg={4}>
          <img
            className="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 style={{ fontFamily: 'Russo One' }}>Xtreme</h2>
          <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
          </p>
          <button className="btn btn-sm btn-dark rounded border border-warning" style={{ width: '130px', maxHeight: '130px', fontFamily: 'Share', fontSize: '15px' }} onClick={() => filterExperience("Xtreme")}>View Details »</button>
        </MDBCol>
        <MDBCol lg={4}>
          <img
            className="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 style={{ fontFamily: 'Russo One' }}>Cultural</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
          </p>
          <button className="btn btn-sm btn-dark rounded border border-warning" style={{ width: '130px', maxHeight: '130px', fontFamily: 'Share', fontSize: '15px' }} onClick={() => filterExperience("Cultural")}>View Details »</button>
        </MDBCol>
        <MDBCol lg={4}>
          <img
            className="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 className="mt-2"style={{ fontFamily: 'Russo One' }}>Gastronomic</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
          
          <button className="btn btn-sm btn-dark rounded border border-warning" style={{ width: '130px', maxHeight: '130px', fontFamily: 'Share', fontSize: '15px' }} onClick={() => filterExperience("Gastronomic")}>View Details »</button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://cdn.hswstatic.com/gif/mt-everest-tourism-171676392.jpg'
        alt='...'
        style={{ width: '80%', maxHeight: '600px' }}
      >
        <div className="bg-dark text-white py-4 ">
        <h5>Xtreme Adventures</h5>
        <p>
          Seek the adrenaline rush? Our Xtreme experiences are designed to thrill, from scaling towering peaks to diving into the depths of the ocean, pushing boundaries and igniting your sense of adventure.
        </p>
    </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://yucatan.travel/wp-content/uploads/2020/07/Chichenitza-Yucatan.jpg'
        alt='...'
        style={{ width: '80%', maxHeight: '600px' }}
      >
        <div className="bg-dark text-white py-4">
        <h5>Cultural Immersion</h5>
        <p>
          We believe the heart of any journey lies in its culture. Delve deep into traditions, history, and vibrant customs through our Cultural experiences. Engage with local communities, participate in ancient rituals, and gain insights that go beyond the surface.
        </p>
    </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://gastrotrips.es/wp-content/uploads/2019/12/viaje-a-tokio-y-kioto-min.jpg'
        alt='...'
        style={{ width: '70%', maxHeight: '600px' }}
      >
        <div className="bg-dark text-white py-4">
        <h5>Gastronomic Delights</h5>
        <p>
          Food is a universal language, and our Gastronomic experiences celebrate the world's culinary treasures. Discover a country's soul through its flavors, savoring street food delicacies to fine dining in historic settings, all while uncovering the stories behind each dish.
        </p>
    </div>
      </MDBCarouselItem>
    </MDBCarousel>
      
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
