import React from 'react';
import '../styles/ParallaxGallery.css';

const ParallaxGallery = () => {
  // Dynamically import all images from the assets folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));
  images.sort((a, b) => b.localeCompare(a));

  return (
    <div className="gallery-container">
      {images.map((image, index) => {
        const imageName = image.split('/').pop().split('.')[0];
        return (
          <div key={index} className="gallery-item">
            <img src={image} alt={imageName} />
            <div className="image-overlay">
              <h3>{imageName}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParallaxGallery;