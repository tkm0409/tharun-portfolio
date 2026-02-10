import React, { useEffect, useRef, useState } from 'react';
import '../styles/ParallaxGallery.css';

const ParallaxGallery = () => {
  // Dynamically import all images from the assets folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));
  images.sort((a, b) => b.localeCompare(a));

  const [visibleItems, setVisibleItems] = useState([]);
  const galleryRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const items = galleryRef.current?.querySelectorAll('.gallery-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Define varying sizes for bento-box layout
  const getItemSize = (index) => {
    const patterns = ['large', 'medium', 'medium', 'large', 'medium', 'large', 'medium', 'medium'];
    return patterns[index % patterns.length];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-dark-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 dark:bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      {/* Animated waves background */}
      <div className="gallery-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
        <div className="wave wave-4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with modern styling */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full">
              My Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
            Visual Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore the milestones and moments that have shaped my professional path through this curated collection of achievements.
          </p>
        </header>

        {/* Masonry/Bento-box Gallery */}
        <div ref={galleryRef} className="gallery-masonry">
          {images.map((image, index) => {
            const imageName = image.split('/').pop().split('.')[0];
            const size = getItemSize(index);
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`gallery-item gallery-item-${size} ${isVisible ? 'gallery-item-visible' : ''}`}
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <div className="gallery-item-inner">
                  <img
                    src={image}
                    alt={imageName}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <div className="gallery-icon">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="gallery-title">{imageName}</h3>
                      <div className="gallery-shine"></div>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="gallery-corner-accent"></div>
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