import React, { useState, useEffect, useRef } from 'react';
import '../styles/MiddleSession.css';

// Import local images
import f1 from '../images/f1.webp';
import f2 from '../images/f2.webp';
import f3 from '../images/f3.webp';
import f4 from '../images/f4.webp';
import f5 from '../images/f5.webp';

const MiddleSession = () => {
  const images = [f1, f2, f3, f4, f5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null); // ✅ Removed TypeScript typing

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(goToNext, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <button
        onClick={goToPrevious}
        className="carousel-button left"
        aria-label="Previous image"
      >
        &#8592;
      </button>

      <img
        src={images[currentIndex]}
        alt={`Freelancing image ${currentIndex + 1}`}
        className="carousel-image"
      />

      <button
        onClick={goToNext}
        className="carousel-button right"
        aria-label="Next image"
      >
        &#8594;
      </button>
    </div>
  );
};

export default MiddleSession;
