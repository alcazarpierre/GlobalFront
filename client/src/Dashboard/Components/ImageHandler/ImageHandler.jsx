import './ImageHandler.modules.css';
import { useState, useRef, useEffect } from 'react';
import { uploadImage } from './cloudinary';

const ImageHandler = ({ onImageChange, initialImageUrl }) => {
  const fileInput = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setPreviewImage(initialImageUrl);
  }, [initialImageUrl]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        alert('Invalid file format. Please upload a JPEG, JPG, or PNG image.');
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('File size exceeds 5MB limit.');
        return;
      }

      setIsUploading(true);

      try {
        const imageUrl = await uploadImage(file);
        if (imageUrl) {
          onImageChange(imageUrl);
          const previewUrl = URL.createObjectURL(file);
          setPreviewImage(previewUrl);
        } else {
          alert('Image upload failed. Please, try again later.');
        }
      } catch (error) {
        alert('Error uploading file. Please try again later.', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div>
        <label className='memeber-image-upload-text' htmlFor='image'>*Imagen (5Mb Máx): </label>
        <p className='image-formats'>Formatos válidos: .jpg, .jpeg .png</p>
        <input id='image' name='image' type='file' ref={fileInput} onChange={handleFileChange} />
        {isUploading && <p className='uploading-image'>Cargando Imagen...</p>}

        {previewImage && !isUploading && (
        <img
            src={previewImage}
            alt='Preview'
            style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}
        />
        )}
    </div>
  );
};

export default ImageHandler;