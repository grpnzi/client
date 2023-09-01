import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function ExperienceDetail() {
    const { experienceId, location } = useParams();
    const [experience, setExperience] = useState(null);
    const [expReviews, setExpReviews] = useState(null);
    const [revAuthor, setRevAuthor] = useState(null);
    const location2 = 'ESP'
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/${location2}/${experienceId}`
    const apiUrlReviews = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`

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

        fetch(apiUrlReviews)
            .then(response => response.json())
            .then((data) => {
                console.log(data, 'reviews');
                return setExpReviews(data)
            })
            .catch((err) => console.log(err))

    }, []);

    useEffect(() => {

        fetch(apiUrlReviews)
            .then(response => response.json())
            .then((data) => {
                console.log(data, 'reviews');
                return setExpReviews(data)
            })
            .catch((err) => console.log(err))

    }, []);

    return (
        <>
            {(!experience || !expReviews) ? <p>Loading...</p>
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
                        {expReviews.reviews.map((review) => (
                            <div key={review._id}>
                                <h1>{review.name}</h1>
                                <p>Comment: {review.comment}</p>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>

    );
}

export default ExperienceDetail;
