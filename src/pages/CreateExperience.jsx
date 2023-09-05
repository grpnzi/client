import React, { useState } from "react";
import { CloudinaryContext, ImageUrl } from "cloudinary-react";

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
    console.log(requestBody);

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
      <h2>Create New Experience</h2>
      <form onSubmit={handleCreateSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            required
            name="title"
          />
        </label>
        <br />

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={handlelocation}
            required
            name="location"
          />
        </label>
        <br />

        <label>
          Experience Type:
          <input
            type="text"
            value={experienceType}
            onChange={handleExperienceType}
            required
            name="experienceType"
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescription}
            required
            name="description"
          />
        </label>
        <br />

        <label>
          Duration:
          <input
            type="text"
            value={duration}
            onChange={handleDuration}
            required
            name="duration"
          />
        </label>
        <br />

        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={handlePrice}
            required
            name="price"
          />
        </label>
        <br />

        <label>
          Upload Image:
          <input
            type="file"
            onChange={handleImage}
            accept="image/*"
            required
            name="imageUrl"
          />
        </label>
        <br />
        <button type="submit">Create Experience</button>
      </form>
    </div>
  );
}

export default AddExperience;
