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

        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="d-flex flex-column comment-section">
                            <div className="bg-white p-2">
                                <div className="d-flex flex-row user-info"><img className="rounded-circle" src={review.author.img} width="40" />
                                    <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">{review.author.name}</span><span className="date text-black-50">Shared {getTimeElapsed(new Date(review.createdAt))}</span></div>
                                </div>
                                <div className="mt-2">
                                    {isEditing ?
                                        <Form onSubmit={(event) => editComment(event, review)}>
                                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" rows={3} name="comment" value={commentEdited} onChange={handleCommentInput} />
                                                <Button type="submit" className="text-center btn btn-sm btn-dark" style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }}>Publish</Button>
                                            </Form.Group>
                                        </Form>
                                        :
                                        <p>{review.comment}</p>
                                    }
                                </div>
                            </div>
                            <div className="bg-white">
                                <div className="d-flex flex-row fs-12">
                                    {user?._id ? <Button variant="outline-dark" style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }} onClick={(event) => likeComment(event, review._id)}>❤️{review.likes.length}</Button>
                                        :
                                        <Link to="/login"><button className="like">❤️{review.likes.length}</button></Link>
                                    }
                                    {review.author._id === user?._id && (
                                        <div className="like p-2 cursor">
                                            {isEditing ? (
                                                <Button variant="outline-primary" style={{ width: '130px', maxHeight: '40px', fontFamily: 'Share', fontSize: '14px' }} onClick={() => { setIsEditing(false); }}>Cancel</Button>
                                            ) : (
                                                <Button className="text-center btn btn-sm btn-dark rounded border border-warning" style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }} onClick={() => { setIsEditing(true); setComment(review.comment) }}>Edit</Button>
                                            )}
                                        </div>
                                    )}
                                    {(review.author._id === user?._id && isEditing) && (
                                        <div className='delete'>
                                            <Button variant="outline-danger" style={{ width: '130px', maxHeight: '40px', fontFamily: 'Share', fontSize: '14px' }} onClick={(event) => deleteComment(event, { reviewId: review._id })}>Delete</Button>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard;


