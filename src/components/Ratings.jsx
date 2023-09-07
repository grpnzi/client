import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AuthContext } from "../context/auth.context";
import StarRatings from 'react-star-ratings';

const Rating = (props) => {
    const { user } = useContext(AuthContext);
    const { experienceId } = props
    const [ratings, setRatings] = useState([])
    const [rate, setRate] = useState(false)
    const [ratingValue, setRatingValue] = useState(0);
    const [error, setError] = useState("");
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


    const handleRate = (e) => {
        e.preventDefault()
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
                console.log('DATA: ',data);
                setRate(false);
                if(data.error)
                {
                    setError(data.error)
                }
                updateStars()
            })
            .catch((err) =>{
                console.log('THIS IS THE CATCH ',err)

            });
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
        <div >
            {!rate ?
                <div className=" in-line">
                    <div className="d-inline-block align-top"> {/* Add this container */}
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
                        <div className="d-inline-block align-top mt-1">
                            <p>Average Rating: {averageRating.toFixed(1)} ➡️ Total ratings: {ratings.length}</p>
                            {error && <p className="text-danger">{error}</p>}
                        </div>
                        <div className="d-inline-block align-top  mt-1">
                            {user ? 
                                <>
                                <button className="btn-sm btn-dark rounded border border-warning"
                                    style={{ width: '50px', maxHeight: '50px', fontFamily: 'Share', fontSize: '13px' }}  
                                    onClick={() => setRate(true)}>RATE
                                </button>
                                </>
                                :
                                <Link to="/login"><button className="btn-sm btn-dark rounded border border-warning"
                                style={{ width: '50px', maxHeight: '50px', fontFamily: 'Share', fontSize: '13px' }}>Rate</button></Link>}
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className="mx-2 in-line">
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
                            <button type="button" className="btn-sm btn-dark rounded border border-warning"
                                    style={{ width: '50px', maxHeight: '50px', fontFamily: 'Share', fontSize: '13px' }} 
                                    onClick={handleRate}>
                                Submit
                            </button>
                            <button type="button" className="btn-sm btn-dark rounded border border-warning"
                                    style={{ width: '50px', maxHeight: '50px', fontFamily: 'Share', fontSize: '13px' }} 
                                    onClick={() => setRate(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </>

            }
        </div>
    );
};

export default Rating;