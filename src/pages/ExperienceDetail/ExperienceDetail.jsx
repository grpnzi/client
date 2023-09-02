import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from "../../components/Review/Review";
import ReviewCard from "../../components/Review/ReviewCard";

import {
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";

function ExperienceDetail() {
    const { experienceId, location } = useParams();
    const [experience, setExperience] = useState(null);
    const [expReviews, setExpReviews] = useState(null);

    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/${location}/${experienceId}`
    const apiUrlReviews = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`

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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={experience.imageUrl} alt={experience.title} className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <h1 className="mt-4">{experience.title}</h1>
                                <p className="lead">{experience.description}</p>
                                <p className="mt-4">
                                    Price: ${experience.price}
                                    <button className="btn btn-primary ml-2">Book Now</button>
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
