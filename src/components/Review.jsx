import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./../context/auth.context";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import IsPrivate from "./IsPrivate/IsPrivate";

function Review(props) {
    const { user } = useContext(AuthContext);
    const { experienceId, getReviews } = props;
    const [review, setReview] = useState(null);
    const [comment, setComment] = useState("");
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`;
    const apiUrlReviews = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`;

    const handleCommentInput = e => setComment(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            comment,
            author: user._id
        };

        fetch(apiUrlReviews, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
        .then(()=> getReviews())

        // Reset the state
        setComment("");
    }

    return (
        <>
        {!user ? 
        <> 
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your comment...</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" value={comment} onChange={handleCommentInput} />
                    <Link to="/login"><Button variant="outline-info">Publish</Button></Link>
                </Form.Group>
            </Form> 
        </>
        : <IsPrivate>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your comment...</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" value={comment} onChange={handleCommentInput} />
                    <Button type="submit" variant="outline-info">Publish</Button>
                </Form.Group>
            </Form>
        </IsPrivate>}
        
        </>
    );
}

export default Review;
