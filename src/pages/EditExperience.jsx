import React, { useContext, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Form, Button } from "react-bootstrap"


function EditExperience() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { experienceId, location } = useParams();
  const [title, setTitle] = useState("");
  const [experienceType, setExperienceType] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchExperienceData();
  }, [experienceId]);

  const fetchExperienceData = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/${location}/${experienceId}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const {
          title,
          experienceType,
          description,
          duration,
          price,
          imageUrl,
        } = data;
        setTitle(title);
        setExperienceType(experienceType);
        setDescription(description);
        setDuration(duration);
        setPrice(price);
        setImageUrl(imageUrl);
      } else {
        console.log("ërror");
      }
    } catch (error) {
      console.error("Error fetching experience data: ", error);
    }
  };
  //  WE DO NOT ADD LOCATION BECAUSE WE CANNOT EDIT LOCATION
  const handleTitle = (e) => setTitle(e.target.value);
  const handleExperienceType = (e) => setExperienceType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleDuration = (e) => setDuration(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);

  const handleImage = (e) => { };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/experience/edit/${experienceId}`;
    const requestBody = {
      title,
      location,
      experienceType,
      description,
      duration,
      price,
      imageUrl,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error editing experience: ", error);
    }
  };

  return (

    <>
      {user?.admin && (
        <div>
          <div>
            <h2 className="mt-5 mb-3 text-center" style={{ fontFamily: 'Russo One', fontSize: '25px', color: 'black' }}>Edit Experience</h2>
            <Form onSubmit={handleEditSubmit} className="mx-auto w-50">
              <Form.Label style={{ fontFamily: 'Share', fontSize: '18px', color: 'black' }}></Form.Label>
              <div className="justify-content-start" style={{ fontFamily: 'Russo One', fontSize: '16px', color: 'black' }}>Title:</div>
              <Form.Control
                type="text"
                value={title}
                onChange={handleTitle}
                required
                name="title"
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

<CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
  <div className="mx-auto mt-4 text-center">
    <Image
      className="img-fluid"
      style={{ maxWidth: '100%', maxHeight: '500px' }}
      publicId={imageUrl}
    />
  </div>
</CloudinaryContext>
<Button
  type="submit"
  className="mx-auto d-block btn btn-md btn-dark rounded border border-warning my-4 mt-4 mb-4 p-2"
  style={{ width: '100%', maxHeight: '50px', fontFamily: 'Share', fontSize: '19px' }}
>
  Edit
</Button>
              {/* <CloudinaryContext
                cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
              >
                <Image className="ml-auto mt-4" style={{
                  width: '600px', maxHeight: '500px', display: 'block', margin: '0 auto' }} publicId={imageUrl} />
              </CloudinaryContext>
              <Button type="submit" className="mx-auto d-block btn btn-md btn-dark rounded border border-warning  my-4 mt-5 mb-5 p-2" style={{ width: '723px', maxHeight: '50px', fontFamily: 'Share', fontSize: '19px' }}>Edit</Button> */}
            </Form>
          </div>
        </div>
      )}
    </>
  )



}

export default EditExperience;