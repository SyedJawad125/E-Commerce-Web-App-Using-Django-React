// src/Slider.js
import React, { useState } from 'react';
import '../App.css'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Example card data. Replace with your actual data if needed.
  const cards = Array.from({ length: 10 }, (_, index) => ({ id: index + 1, content: `Card ${index + 1}` }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length - 5 + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length - 5 + 1) % (cards.length - 5 + 1));
  };

  return (
    <div className="slider-container">
      <button className="fas fa-arrow-left" onClick={handlePrev}>‹</button>
      <div className="slider">
        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100 / 5}%)` }}>
          {cards.map((card, index) => (
            <div className="card" key={card.id}>{card.content}</div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={handleNext}>›</button>
    </div>
  );
};

export default Slider;
