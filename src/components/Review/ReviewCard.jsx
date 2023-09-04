import { formatDistanceToNow } from 'date-fns';
import { useContext, useState } from "react";
import './ReviewCard.css'
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBIcon,
    MDBTypography,
} from "mdb-react-ui-kit";


function ReviewCard(props) {
    const { review, experienceId, getReviews } = props
    const [isEditing, setIsEditing] = useState(false);
    const [commentEdited, setComment] = useState("");
    const { user } = useContext(AuthContext);
    const handleCommentInput = e => setComment(e.target.value);

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

    const editComment = (event, review) => {
        const apiUrlEdit = `${process.env.REACT_APP_SERVER_URL}/reviews/edit`;
        event.preventDefault();

        const { _id } = review

        console.log(commentEdited);
        const updatedReview = {
            comment: commentEdited,
            reviewId: _id
        }

        fetch(apiUrlEdit, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Update request failed');
                }
                return response.json();
            })
            .then(data => {
                console.log("Update successful:", data);
                setIsEditing(false);
                getReviews();
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }

    const likeComment = (event, reviewId) => {
        const apiUrlLike = `${process.env.REACT_APP_SERVER_URL}/reviews/like`;
        event.preventDefault();


        const updatedReview = {
            userId: user._id,
            reviewId: reviewId
        }

        fetch(apiUrlLike, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })
            .then((response) => {
                if (response.ok) {
                    getReviews();
                } else {
                    console.error('Like/Unlike operation failed');
                }
            })
            .catch(err => console.log('Error: ', err))

    }

    return (
        <MDBCol md="11" lg="9" xl="7">
            <div className="d-flex flex-start mb-4">
                <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={review.author.img}
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
                            {isEditing ?
                                <Form onSubmit={(event) => editComment(event, review)}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} name="comment" value={commentEdited} onChange={handleCommentInput} />
                                        <Button type="submit" variant="outline-info">Publish</Button>
                                    </Form.Group>
                                </Form>
                                :
                                <p>{review.comment}</p>
                            }

                            <div>
                                {user?._id ? <Button variant="outline-dark" onClick={(event) => likeComment(event, review._id)}>❤️{review.likes.length}</Button>
                                    :
                                    <Link to="/login"><button className="like">❤️{review.likes.length}</button></Link>
                                }
                            </div>
                        </div>
                        <div className='buttonsContainer'>
                            {review.author._id === user?._id && (
                                <div className='edit'>
                                    {isEditing ? (
                                        <Button variant="outline-primary" onClick={() => { setIsEditing(false); }}>Cancel</Button>
                                    ) : (
                                        <Button variant="outline-primary" onClick={() => { setIsEditing(true); setComment(review.comment) }}>Edit</Button>
                                    )}
                                </div>
                            )}

                            {(review.author._id === user?._id && isEditing) && (
                                <div className='delete'>
                                    <Button variant="outline-danger" onClick={(event) => deleteComment(event, { reviewId: review._id })}>Delete</Button>
                                </div>
                            )}
                        </div>
                    </MDBCardBody>
                </MDBCard>

            </div>
        </MDBCol>
    )
}

export default ReviewCard;