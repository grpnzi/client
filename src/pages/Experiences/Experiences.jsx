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
  const [display, setDisplay] = useState(false)
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/${location}/experience`;

  const [experienceFiltered, setExperienceFiltered] = useState(null);

  const [experience, setExperience] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  function moveToExperiences() {
    // Check the screen width (you can adjust this threshold as needed)
    const screenWidth = window.innerWidth;
  
    // Define the scroll position based on screen width
    let scrollPosition;
  
    if (screenWidth <= 768) {
      // For mobile or smaller screens
      scrollPosition = 1100;
    } else {

      scrollPosition = 200;
    }
  
    window.scrollTo(0, scrollPosition);
  }

  return (
    <>
      <MDBContainer>
        <MDBRow className="text-center">
          <MDBCol lg={4}>
            <img
              className="rounded-circle mt-5"
              src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl2aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 className="mt-3" style={{ fontFamily: 'Russo One' }}>Xtreme</h2>
            <button className="btn btn-sm btn-dark rounded border border-warning mt-2 mb-5" style={{ width: '200px', maxHeight: '50px', fontFamily: 'Share', fontSize: '15px' }} onClick={() => {filterExperience("Xtreme"); setDisplay(true); moveToExperiences()}}>View Details »</button>
          </MDBCol>
          <MDBCol lg={4}>
            <img
              className="rounded-circle mt-5"
              src="https://images.unsplash.com/photo-1530244534845-4a0c319f41e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 className="mt-3" style={{ fontFamily: 'Russo One' }}>Cultural</h2>
            <button className="btn btn-sm btn-dark rounded border border-warning mt-2 mb-5" style={{ width: '200px', maxHeight: '50px', fontFamily: 'Share', fontSize: '15px' }} onClick={() => {filterExperience("Cultural"); setDisplay(true); moveToExperiences()}}>View Details »</button>
          </MDBCol>
          <MDBCol lg={4}>
            <img
              className="rounded-circle mt-5"
              src="https://images.unsplash.com/photo-1571989569149-250bd32f5eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FzdHJvbm9teXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 className="mt-3" style={{ fontFamily: 'Russo One' }}>Gastronomic</h2>


            <button className="btn btn-sm btn-dark rounded border border-warning mt-2 mb-5" style={{ width: '200px', maxHeight: '50px', fontFamily: 'Share', fontSize: '15px' }} onClick={() => {filterExperience("Gastronomic"); setDisplay(true); moveToExperiences()}}>View Details »</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {!display && 
      <MDBCarousel showControls>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='https://cdn.hswstatic.com/gif/mt-everest-tourism-171676392.jpg'
          alt='...'
          style={{ width: '80%', maxHeight: '600px' }}
        >
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://yucatan.travel/wp-content/uploads/2020/07/Chichenitza-Yucatan.jpg'
          alt='...'
          style={{ width: '80%', maxHeight: '600px' }}
        >
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180808200056/Chinatown-SF-1.jpg'
          alt='...'
          style={{ width: '70%', maxHeight: '600px' }}
        >
        </MDBCarouselItem>
      </MDBCarousel>}

      {!experienceFiltered ? <p></p> :
        <>
          {!experienceFiltered ? (
            <p>Setting your experiences...</p>
          ) : (
            <>
              <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
                {experienceFiltered.map((experience) => (
                  <div className="p-2" key={experience._id}>
                    <Card style={{ width: "18rem", backgroundColor: 'white'}} className="h-100">
                      <Card.Img
                        variant="top"
                        src={experience.imageUrl}
                        className="card-img-fixed-height"
                      />
                      <Card.Body className="text-center d-flex flex-column align-items-center">
                        <Card.Title style={{fontFamily: 'Share'}}>{experience.title}</Card.Title>
                        <Card.Text style={{color: 'grey', fontFamily: 'Russo One'}}>{experience.experienceType}</Card.Text>
                        <Card.Text style={{color: 'black', fontFamily: 'Russo One'}}>${experience.price}</Card.Text>
                        <Link className="mt-auto" to={`/country/${location}/${experience._id}`}>
                        <MDBBtn type="submit" className="text-center btn btn-sm btn-dark rounded border border-warning mt-2" style={{ width: '150px', maxHeight: '40px', fontFamily: 'Share', fontSize: '14px', position:'relative', bottom:'0' }}>Read More</MDBBtn>
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
