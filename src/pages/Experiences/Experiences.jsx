import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Experiences(){
const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/:location/experience`
const [xtreme, setXtrem] = useState(null);
const [cultural, setCultural] = useState(null);
// const state de todas las experiencias
// fetch de TODAS las experiencias

// crear una función que filtre las experiencias según CULTURAL/GASTRO/EXTREME ([]).filter type gastro

useEffect(() => {

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            return setCultural(data)
        })
        .catch((err) => console.log(err))



}, []);

useEffect(() => {

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            return setGastro(data)
        })
        .catch((err) => console.log(err))



}, []);


}



return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={experience.imageUrl} alt={experience.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1 className="mt-4">Unleash Experiences</h1>
                    <h2 className="mt-4">{experience.title}</h2>
                    <p className="lead">{experience.description}</p>
                    <p className="mt-4">
                        Price: ${experience.price}
                        <button className="btn btn-primary ml-2">Book Now</button>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            {expReviews.reviews.map((review) => (
                <div key={review._id}>
                    <h1>{review.name}</h1>
                    <p>Comment: {review.comment}</p>
                </div>
            ))}
        </div>
    </>

);
            

export default Experiences;
