import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';


function AddExperience() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experienceType, setExperienceType] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handlelocation = (e) => setLocation(e.target.value);
  const handleExperienceType = (e) => setExperienceType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleDuration = (e) => setDuration(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "qh39k8v5");

    fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.secure_url);
      })
      .catch((error) => console.error("Error uploading image: ", error));
  };
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/create`;
    const requestBody = {
      title,
      location,
      experienceType,
      description,
      duration,
      price,
      imageUrl,
    };


    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then(() => {

      setImageUrl("");

      setTitle("");
      setLocation("");
      setExperienceType("");
      setDescription("");
      setDuration("");
      setPrice(0);
    })
      .catch((error) => {
        console.log(error, "cannot create experience");
      });
  };
  return (
    <div>
      <div>
        <h2 className="mt-5 mb-3 text-center" style={{ fontFamily: 'Russo One', fontSize: '25px', color: 'black' }}>Create New Experience</h2>
        <Form onSubmit={handleCreateSubmit} className="mx-auto w-50">
          <Form.Label style={{ fontFamily: 'Share', fontSize: '18px', color: 'black' }}></Form.Label>
          <div className="justify-content-start" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Title:</div>
          <Form.Control
            type="text"
            value={title}
            onChange={handleTitle}
            required
            name="title"
          />

          <Form.Label className="mt-4 mb-2" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Location:</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={handlelocation}
            required
            name="location"
          />

          <Form.Label className="mt-4 mb-2" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Experience type:</Form.Label>
          <Form.Control
            type="text"
            value={experienceType}
            onChange={handleExperienceType}
            required
            name="experienceType"
          />

          <Form.Label className="mt-4 mb-1" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={handleDescription}
            required
            name="description"
          />

          <Form.Label className="mt-4 mb-1" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Duration:</Form.Label>
          <Form.Control
            type="text"
            value={duration}
            onChange={handleDuration}
            required
            name="duration"
          />

          <Form.Label className="mt-4 mb-1" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Price:</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={handlePrice}
            required
            name="price"
          />

          <Form.Label className="mt-4 mb-1" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Upload Image:</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImage}
            accept="image/*"
            required
            name="imageUrl"
          />


          <Button type="submit" className="mx-auto d-block btn btn-md btn-dark rounded border border-warning my-4 mt-5 mb-5 p-2" style={{ width: '100%', maxWidth: '723px', fontFamily: 'Share', fontSize: '19px', maxHeight: '48px' }}>
            Create
          </Button>

        </Form>
      </div>
    </div>
  );
}

export default AddExperience;
