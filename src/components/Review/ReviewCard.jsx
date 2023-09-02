import { formatDistanceToNow } from 'date-fns';
import { useContext } from "react";
import './ReviewCard.css'
import Button from "react-bootstrap/esm/Button";
import { AuthContext } from "../../context/auth.context";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBIcon,
    MDBTypography,
} from "mdb-react-ui-kit";


function ReviewCard(props) {
    const { review, experienceId, getReviews } = props
    const { user } = useContext(AuthContext);

    const getTimeElapsed = (createdAt) => {
        const currentTime = new Date();
        const differenceInSeconds = Math.floor(
            (currentTime - createdAt) / 1000
        ); // Calculate the difference in seconds

        if (differenceInSeconds < 10) {
            return 'Just now';
        } else {
            return formatDistanceToNow(createdAt, { addSuffix: true });
        }
    };

    const deleteComment = (event, reviewId) => {
        const apiUrlDelete = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}/delete`;
        event.preventDefault();
        fetch(apiUrlDelete, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewId),
        })
        .then(() => getReviews())
        .catch(err => console.log('Error: ', err))

    }

    return (
        <MDBCol md="11" lg="9" xl="7">
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
                {review.author._id === user?._id &&
                    <div className='delete'>
                    <Button variant="outline-danger" onClick={(event) => deleteComment(event, {reviewId: review._id})}>Delete</Button>
                </div>}
            </div>
        </MDBCol>
    )
}

export default ReviewCard;