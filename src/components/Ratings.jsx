import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AuthContext } from "../context/auth.context";
import IsPrivate from "./IsPrivate/IsPrivate";
import StarRatings from 'react-star-ratings';

const Rating = (props) => {
    const { user } = useContext(AuthContext);
    const { experienceId } = props
    const [ratings, setRatings] = useState([])
    const [rate, setRate] = useState(false)
    const [ratingValue, setRatingValue] = useState(0);
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/rating/${experienceId}/all`

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data, 'rating');
                if (data.updatedExperience && data.updatedExperience.ratings) {
                    setRatings(data.updatedExperience.ratings);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const calculateAverageRating = () => {
        if (ratings.length === 0) {
            return 0;
        }

        const totalRating = ratings.reduce((sum, rating) => sum + (rating.rating / 2), 0);
        const average = totalRating / ratings.length;

        const clampedAverageRating = Math.min(5, Math.max(0, average));

        return clampedAverageRating;
    };

    const averageRating = calculateAverageRating();
    const clampedRating = Math.min(5, Math.max(0, Math.round(averageRating)));


    const handleRate = () => {

        fetch(`${process.env.REACT_APP_SERVER_URL}/rating/${experienceId}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: user._id,
                ratingValue,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRate(false);
                updateStars()
            })
            .catch((err) => console.log(err));
    };

    const updateStars = () => {

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data, 'rating');
                if (data.updatedExperience && data.updatedExperience.ratings) {
                    setRatings(data.updatedExperience.ratings);
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            {!rate ?
                <div>
                    <div>
                        <StarRatings
                            rating={clampedRating}
                            starDimension="20px"
                            starSpacing="2px"
                            starRatedColor="gold"
                            starEmptyColor="gray"
                            numberOfStars={5}
                        />
                    </div>
                    <p>Average Rating: {averageRating.toFixed(1)} ➡️ Total ratings: {ratings.length}</p>

                    {user ? <button onClick={() => setRate(true)}>Rate</button>
                        :
                        <Link to="/login"><button>Rate</button></Link>}

                </div>
                :
                <div>
                    <div>
                        <form>
                            <label>
                                Your Rating (0-10):
                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    value={ratingValue}
                                    onChange={(e) => setRatingValue(Number(e.target.value))}
                                />
                            </label>
                            <button type="button" onClick={handleRate}>
                                Submit
                            </button>
                            <button type="button" onClick={() => setRate(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                    <button onClick={() => setRate(true)}>Rate</button>

                </div>

            }
        </>
    );
};

export default Rating;