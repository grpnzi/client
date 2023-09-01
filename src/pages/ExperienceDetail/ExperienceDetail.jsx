import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from "../../components/Review";
import { formatDistanceToNow } from 'date-fns';

import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
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

    const getTimeElapsed = (createdAt) => {
        const currentTime = new Date();
        const differenceInSeconds = Math.floor(
            (currentTime - createdAt) / 1000
        ); // Calculate the difference in seconds

        if (differenceInSeconds < 10) {
            return 'Just now'; // Display "Just now" for very recent timestamps
        } else {
            return formatDistanceToNow(createdAt, { addSuffix: true });
        }
    };

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
                                        <MDBCol md="11" lg="9" xl="7" key={review._id}>
                                            <div className="d-flex flex-start mb-4">
                                                <img
                                                    className="rounded-circle shadow-1-strong me-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                                    alt="avatar"
                                                    width="65"
                                                    height="65"
                                                />

                                                <MDBCard className="w-100">
                                                    <MDBCardBody className="p-4">
                                                        <div>
                                                            {review.author && (
                                                                <>
                                                                    <MDBTypography tag="h5">{review.author.name}</MDBTypography>
                                                                    <p className="small">Published {getTimeElapsed(new Date(review.createdAt))}</p>

                                                                </>
                                                            )}
                                                            <p>{review.comment}</p>

                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <a href="#!" className="link-muted me-2"><MDBIcon fas icon="thumbs-up me-1" />{review.likes.length}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </MDBCardBody>
                                                </MDBCard>

                                            </div>
                                        </MDBCol>
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
