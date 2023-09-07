import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import IsPrivate from "../IsPrivate/IsPrivate";

function FormLogin(props) {
    const { user } = useContext(AuthContext);
    const { experienceId, getReviews } = props;
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState("");

    const apiUrlReviews = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`;
    const handleCommentInput = e => setComment(e.target.value);

    useEffect(() => {

        fetch(apiUrlReviews)
            .then(response => response.json())
            .then((data) => {
                return setReviews(data)
            })
            .catch((err) => console.log(err))

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const matches = reviews.reviews.filter((review) => {
            return (review.author._id === user._id)
        })

        console.log(matches);
        if (!matches.length === 0) {
            setComment('You have already commented, update the older message or delete the older one');
        } else {

            const newReview = {
                comment,
                userId: user._id,
            };

            fetch(apiUrlReviews, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
            })
                .then(() => getReviews())

            // Reset the state
            setComment("");
        }
    }



    return (
        <>
            <IsPrivate>
                <div style={{ padding: '20px' }}>
                    <form onSubmit={handleSubmit} className="mt-5">
                        <div className="form-group d-flex justify-content-center">
                            <textarea
                                className="form-control form-control-lg d-lg-none"
                                rows="4"
                                name="comment"
                                value={comment}
                                onChange={handleCommentInput}
                                placeholder="Enter your comment here..."
                            ></textarea>
                            <textarea
                                className="form-control w-50 d-none d-lg-block" // Smaller on large screens
                                rows="4"
                                name="comment"
                                value={comment}
                                onChange={handleCommentInput}
                                placeholder="Enter your comment here..."
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="text-center btn btn-sm btn-dark rounded border border-warning mt-5"
                                style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }}
                            >
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </IsPrivate>
        </>
    );
}

export default FormLogin;
