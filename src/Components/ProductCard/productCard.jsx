import React from "react";
import './productCard.css'

const ProductCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProductCard;