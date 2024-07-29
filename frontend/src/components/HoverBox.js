// HoverBox.js
import React from 'react';
import '../components/HoverBox.css';


const HoverBox = ({ products }) => {
  return (
    <div className="hover-box">
      {products.map((product) => (
        <div key={product.id} className="hover-box-item">
          <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="hover-box-image" />
          <p className="hover-box-name">{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HoverBox;
