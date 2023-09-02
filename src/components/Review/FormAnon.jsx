import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

function FormAnon(props) {
    const { user } = useContext(AuthContext);
    const { experienceId, getReviews } = props;
    const [comment, setComment] = useState("");

    const apiUrlReviews = `${process.env.REACT_APP_SERVER_URL}/reviews/${experienceId}`;
    const handleCommentInput = e => setComment(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            comment,
            userId: user._id
        };
        console.log(newReview);
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

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your comment...</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" value={comment} onChange={handleCommentInput} />
                    <Link to="/login"><Button variant="outline-info">Publish</Button></Link>
                </Form.Group>
            </Form>
        </>
    );
}

export default FormAnon;
