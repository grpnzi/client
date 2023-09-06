import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from "../../context/auth.context";
import { Card } from "react-bootstrap";


function Staff() {
    const [guides, setGuides] = useState("")
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/staff`


    useEffect(() => {

        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                return setGuides(data)
            })
            .catch((err) => console.log(err))

    }, []);



    return (
        <div className="row featurette mt-2 mx-0">
          <div className="col-md-7">
            <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">
              Crew & Staff
            </h2>
            <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">
              Experts in everything from sports to culture and history, the members of our team are always eager to share their infectious passion for traveling and enjoying new experiences. Add in professional hotel staff and a seasoned crew, and you will be more than comfortable during your adventure.
            </p>
          </div>
          <div className="col-md-5 mt-5 d-flex">
            {guides ? (
              guides.map((guide) => {
                return (
                  <div key={guide.id} style={{ marginRight: '20px' }}>
                    <Card className="bg-dark text-white" style={{ width: '250px', height: '250px' }}>
                      <Card.Img
                        src={guide.img}
                        alt="Card image"
                        className="img-thumbnail"
                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                      />
                      <div
                        className="card-img-overlay d-flex flex-column justify-content-end align-items-start"
                        style={{
                          background: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, transparent 100%)`,
                          padding: '20px',
                          height: '100%',
                        }}
                      >
                        <Card.Title style={{ color: 'white' }}>{guide.name} </Card.Title>
                        <Card.Text style={{ color: 'white' }}>{guide.occupation} </Card.Text>
                      </div>
                    </Card>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      );
      
}

export default Staff;


