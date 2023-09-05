import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
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
        if (!matches.length == 0) {
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
            .then(()=> getReviews())
    
            // Reset the state
            setComment("");
        }
    }



    return (
        <>
        <IsPrivate>
            <Form onSubmit={handleSubmit} className="d-flex justify-content-center mt-5">
                <Form.Group className="mb-3 w-50 w-sm-100" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your comment...</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" value={comment} onChange={handleCommentInput} />
                    <Button type="submit" variant="outline-info">Publish</Button>
                </Form.Group>
            </Form>
        </IsPrivate>
        </>
    );
}

export default FormLogin;
