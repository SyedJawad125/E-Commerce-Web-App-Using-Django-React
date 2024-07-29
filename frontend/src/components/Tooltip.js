// Tooltip.js
import React from 'react';
// import './Tooltip.css';

const Tooltip = ({ products }) => {
  return (
    <div className="tooltip-container">
      {products.map((product) => (
        <div key={product.id} className="tooltip-item">
          <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="tooltip-image" />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
