import { Link } from "react-router-dom";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

function FormAnon(props) {

    const [comment, setComment] = useState("");
    const handleCommentInput = e => setComment(e.target.value);

    return (
        <>
            <Form className="d-flex justify-content-center mt-5">
                <Form.Group className="mb-3 w-50 w-sm-100" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your comment...</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" value={comment} onChange={handleCommentInput} />
                    <Link to="/login"><Button className="text-center btn btn-sm btn-dark rounded border border-warning" style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }} >Publish</Button></Link>
                </Form.Group>
            </Form>
        </>
    );
}

export default FormAnon;
