import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-5 ">
          <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="mt-5 heading">
            Crew & Staff
          </h2>
          <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">
            Experts in everything from sports to culture and history, the members of our team are always eager to share their infectious passion for traveling and enjoying new experiences. Add in professional hotel staff and a seasoned crew, and you will be more than comfortable during your adventure.
          </p>
        </div>

          {guides ? (
            guides.map((guide) => {
              return (
                <div key={guide._id} className="mb-4 mt-5 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
                  <Card key={guide.id} className="bg-dark text-white" style={{width: '280px'}}>
                    <Card.Img
                      src={guide.img}
                      alt="Card image"
                      className="img-thumbnail img-fluid"
                      style={{ objectFit: 'cover', height: '250px'}}
                    />
                    <div
                      className="card-img-overlay d-flex flex-column justify-content-end align-items-start"
                      style={{
                        background: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, transparent 100%)`,
                        padding: '20px',
                        height: '100%',
                      }}
                    >
                      <Card.Title style={{ color: 'white' }}>{guide.name}</Card.Title>
                      <Card.Text style={{ color: 'white' }} className="text-left">{guide.occupation}</Card.Text>
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







{/* <div>
<div className="container-fluid mt-5 -5">
<div className="row d-flex experienceContainer rounded p-4 mx-4 customCss background">
    <div className="col-md-6">
        <div className="d-flex align-items-center justify-content-center">
            <img
                src={experience.imageUrl}
                alt={experience.title}
                className="img-fluid imgDescription rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
    </div>
    <div className="col-md-6 experienceDiv">
        <h1 className="mt-4">{experience.title}</h1>
        <p className="lead">{experience.description}</p>
        <p className="mt-4" style={{ fontFamily: 'Share', fontSize: '19px' }}>
            Price: ${experience.price}
            <button
                className="text-center btn btn-sm btn-dark rounded border border-warning"
                style={{ width: '130px', maxHeight: '35px', fontFamily: 'Share', fontSize: '14px' }}
                onClick={() => { cartUpdate(experience) }}
            >
                Purchase
            </button>
        </p>
    </div>
</div>
</div>
<div className="container mt-5">
<div className="row featurette">
  <div className="col-md-5">
    <h2 style={{ fontFamily: 'Russo One', fontSize: '25px' }} className="featurette-heading">
      Crew & Staff
    </h2>
    <p style={{ fontFamily: 'Share', fontSize: '20px' }} className="lead">
      Experts in everything from sports to culture and history, the members of our team are always eager to share their infectious passion for traveling and enjoying new experiences. Add in professional hotel staff and a seasoned crew, and you will be more than comfortable during your adventure.
    </p>
  </div>
  <div className="col-md-6 mt-5 d-flex flex-wrap">
    {guides ? (
      guides.map((guide) => {
        return (
          <div key={guide.id} className="mb-4 col-md-4 col-lg-3" style={{ maxWidth: '200px', minWidth: '100px', margin: '0 10px' }}>
            <Card className="bg-dark text-white">
              <Card.Img
                src={guide.img}
                alt="Card image"
                className="img-thumbnail"
                style={{ objectFit: 'cover', height: '250px', width: '100%' }}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end align-items-start"
                style={{
                  background: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, transparent 100%)`,
                  padding: '20px',
                  height: '100%',
                }}
              >
                <Card.Title style={{ color: 'white' }}>{guide.name}</Card.Title>
                <Card.Text style={{ color: 'white' }} className="text-left">{guide.occupation}</Card.Text>
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
</div>
</div> */}