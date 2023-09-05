import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from "../../components/Review/Review";
import ReviewCard from "../../components/Review/ReviewCard";
import { CartContext } from "../../context/cart.context";
import './ExperienceDetail.css'

import {
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";

function ExperienceDetail() {
    const {cart,cartUpdate} = useContext(CartContext)
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
                    <div className="container-fluid mt-5">
                        <div className="row d-flex">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center h-100 w-100 justify-content-center"> 
                                    <img src={experience.imageUrl} 
                                    alt={experience.title} 
                                    className="img-fluid" 
                                    style={{ width: '1200px', height: '630px' }}
                                    />










                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="mt-4">{experience.title}</h1>
                                <p className="lead">{experience.description}</p>
                                <p className="mt-4">
                                    Price: ${experience.price}
                                    <button className="button-add" onClick={()=>{cartUpdate(experience)}}>Purchase</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        {<Review experienceId={experienceId} getReviews={getReviews} />}
                        <section className="vh-100">
                            <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
                                <MDBRow className="justify-content-center">
                                    {expReviews.reviews.map((review) => (
                                        <React.Fragment key={review._id}>
                                            <ReviewCard review={review} experienceId={experienceId} getReviews={getReviews}/>
                                        </React.Fragment>
                                    ))}
                                </MDBRow>
                            </MDBContainer>
                        </section>
                    </div>
                </>
            }
        </>

    );
}

export default ExperienceDetail;
