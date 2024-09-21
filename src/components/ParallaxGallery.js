import React from 'react';
import '../styles/ParallaxGallery.css';

const ParallaxGallery = () => {
  // Dynamically import all images from the assets folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));
  images.sort((a, b) => b.localeCompare(a));

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Visual Journey</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the milestones and moments that have shaped my professional path.
          </p>
        </header>
        <div className="gallery-container">
          {images.map((image, index) => {
            const imageName = image.split('/').pop().split('.')[0];
            return (
              <div key={index} className="gallery-item">
                <img src={image} alt={imageName} className="rounded-lg shadow-md" />
                <div className="image-overlay">
                  <h3 className="text-white">{imageName}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;