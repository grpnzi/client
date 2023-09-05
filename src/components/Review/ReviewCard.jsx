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
        <MDBCol md="8" lg="9" xl="7">
            <div className="d-flex flex-start mb-3">
                <img
                    className="rounded-circle shadow-1-strong me-1"
                    src={review.author.img}
                    alt="avatar"
                    width="80"
                    height="80"
                />

                <MDBCard className="w-100">
                    <MDBCardBody className="p-4">
                        <div>
                            {review.author && (
                                <>
                                    <MDBTypography tag="h3">{review.author.name}</MDBTypography>
                                    <p className="small">Published {getTimeElapsed(new Date(review.createdAt))}</p>

                                </>
                            )}
                            {isEditing ?
                                <Form onSubmit={(event) => editComment(event, review)}>
                                    <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} name="comment" value={commentEdited} onChange={handleCommentInput} />
                                        <Button type="submit"  className="text-center btn btn-sm btn-dark   " style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }}>Publish</Button>
                                    </Form.Group>
                                </Form>
                                :
                                <p>{review.comment}</p>
                            }

                            <div>
                                {user?._id ? <Button variant="outline-dark"  style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }} onClick={(event) => likeComment(event, review._id)}>❤️{review.likes.length}</Button>
                                    :
                                    <Link to="/login"><button className="like">❤️{review.likes.length}</button></Link>
                                }
                            </div>
                        </div>
                        <div className='buttonsContainer'>
                            {review.author._id === user?._id && (
                                <div className='edit'>
                                    {isEditing ? (
                                        <Button variant="outline-primary" style={{ width: '130px', maxHeight: '40px', fontFamily: 'Share', fontSize: '14px' }} onClick={() => { setIsEditing(false); }}>Cancel</Button>
                                    ) : (
                                        <Button   className="text-center btn btn-sm btn-dark rounded border border-warning" style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }} onClick={() => { setIsEditing(true); setComment(review.comment) }}>Edit</Button>
                                    )}
                                </div>
                            )}

                            {(review.author._id === user?._id && isEditing) && (
                                <div className='delete'>
                                    <Button variant="outline-danger" style={{ width: '130px', maxHeight: '40px', fontFamily: 'Share', fontSize: '14px' }} onClick={(event) => deleteComment(event, { reviewId: review._id })}>Delete</Button>
                                </div>
                            )}
                        </div>
                    </MDBCardBody>
                </MDBCard>

            </div>
        </MDBCol>
        <div class="container mt-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="d-flex flex-column comment-section">
            <div class="bg-light p-2">
                    <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                    <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                </div>
                <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div class="mt-2">
                        <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
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


