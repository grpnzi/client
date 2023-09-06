import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from "../../components/Review/Review";
import ReviewCard from "../../components/Review/ReviewCard";
import { CartContext } from "../../context/cart.context";
import DeleteExperience from "../../components/DeleteExperience/DeleteExperience";
import { AuthContext } from "../../context/auth.context";
import './Experience.Details.css'
import { Card } from "react-bootstrap";


import {
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";

function ExperienceDetail() {
    const { user } = useContext(AuthContext)
    const { cart, cartUpdate } = useContext(CartContext)
    const { experienceId, location } = useParams();
    const [experience, setExperience] = useState(null);
    const [expReviews, setExpReviews] = useState(null);

    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/${location}/${experienceId}`
    const apiUrlReviews = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`
    console.log(cart);
    function getReviews() {
        fetch(apiUrlReviews)
            .then(response => response.json())
            .then((data) => {
                console.log(data, 'reviews');
                return setExpReviews(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {

        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                return setExperience(data)
            })
            .catch((err) => console.log(err))

    }, []);

    useEffect(() => {

        getReviews()

    }, []);


    return (
        <>
            {(!experience || !expReviews || !expReviews.reviews) ? <p>Loading...</p>
                :
                <>
                    <div className="container-fluid mt-5 -5">
                        <div className="row d-flex experienceContainer rounded p-4 mx-4 customCss">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center h-100 w-100 justify-content-center">
                                    <img
                                        src={experience.imageUrl}
                                        alt={experience.title}
                                        className="img-fluid imgDescription rounded"
                                        style={{ width: '1080px', height: '495px' }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 experienceDiv">
                                <h1 className="mt-4">{experience.title}</h1>
                                <p className="lead">{experience.description}</p>
                                <p className="mt-4" style={{ fontFamily: 'Share', fontSize: '19px' }}>
                                    Price: ${experience.price}
                                    <button
                                        className="text-center btn btn-sm btn-dark rounded border border-warning"
                                        style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }}
                                        onClick={() => { cartUpdate(experience) }}
                                    >
                                        Purchase
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>




                    {/* src="https://media.gadventures.com/media-server/cache/3e/ce/3ecebc7f82ea0c88ec78f0f5a7fc8c56.jpg" */}



                    {/* <div className="bg-image hover-overlay ">
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" className="w-100 imgCss" />
  <div
    className="mask"
    style={{
      background: "linear-gradient(45deg, hsla(168, 85%, 52%, 0.5), hsla(263, 88%, 45%, 0.5) 100%)"
    }}
  ></div>
</div> */}


<div className="row featurette mt-2 mx-0">
    <div className="col-md-7">
        <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">Crew & Staff</h2>
        <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">Experts in everything from geology to marine biology and polar history, the members of our team are always eager to share their infectious passion for travelling and enjoying new experiences. Add in professional hotel staff and a seasoned crew, and you’ll be more than comfortable during your adventure.</p>
    </div>
    <div className="col-md-5 mt-5 d-flex">
        <Card className="bg-dark text-white" style={{ width: '250px', height: '250px', marginRight: '20px' }}>
            <Card.Img
                src="https://media.gadventures.com/media-server/cache/cd/49/cd49c4396874321f47c6de00cfd8dda5.jpg"
                alt="Card image"
                className="img-thumbnail"
            />
            <div
                className="card-img-overlay d-flex flex-column justify-content-end align-items-start"
                style={{
                    background: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, transparent 100%)`,
                    padding: '10px',
                    height: '100%',
                }}
            >
                <Card.Title style={{ color: 'white' }}>Susana</Card.Title>
                <Card.Text style={{ color: 'white' }}>Operation manager</Card.Text>
            </div>
        </Card>
        <Card className="bg-dark text-white" style={{ width: '250px', height: '250px' }}>
            <Card.Img
                src="https://media.gadventures.com/media-server/cache/cd/49/cd49c4396874321f47c6de00cfd8dda5.jpg"
                alt="Card image"
                className="img-thumbnail"
            />
            <div
                className="card-img-overlay d-flex flex-column justify-content-end align-items-start"
                style={{
                    background: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, transparent 100%)`,
                    padding: '10px',
                    height: '100%',
                }}
            >
                <Card.Title style={{ color: 'white' }}>Susana</Card.Title>
                <Card.Text style={{ color: 'white' }}>Operation manager</Card.Text>
            </div>
        </Card>
    </div>
</div>







                    <div className="container-fluid">
                        {<Review experienceId={experienceId} getReviews={getReviews} />}
                        <section className="vh-100">
                            <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
                                <MDBRow className="justify-content-center">
                                    {expReviews.reviews.map((review) => (
                                        <React.Fragment key={review._id}>
                                            <ReviewCard review={review} experienceId={experienceId} getReviews={getReviews} />
                                        </React.Fragment>
                                    ))}
                                </MDBRow>
                            </MDBContainer>
                        </section>
                        {user?.admin && <Link to={`/country/${location}/${experienceId}/edit`}>EDIT</Link>}
                        {user?.admin && <DeleteExperience location={location}></DeleteExperience>}
                    </div>
                </>

            }
        </>

    );
}

export default ExperienceDetail;
