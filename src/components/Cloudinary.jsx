import React, { useState } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';

const CloudinaryUpload = () => {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    // Use the Cloudinary API to upload the image
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset');

    fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.url);
      })
      .catch((error) => console.error('Error uploading image: ', error));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        {image && <Image publicId={image} width="300" />}
      </CloudinaryContext>
    </div>
  );
};

export default CloudinaryUpload;
