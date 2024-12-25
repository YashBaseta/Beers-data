// src/BeerCard.js
import React from 'react';

const BeerCard = ({ beer }) => {
  return (

    <div className="beer-card" style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              width:"400px",
              marginLeft:"40px",
              marginTop:"50px",
              display:"inline-block"
            }} >
      <img src={beer.image} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>Price:{beer.price}</p>
      <p>Reviews{beer.rating.reviews}</p>
    </div>
  );
};

export default BeerCard;
