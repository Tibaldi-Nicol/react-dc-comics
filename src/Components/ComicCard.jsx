// ComicCard.jsx
import React from "react";

const ComicCard = ({ title, image }) => {
  return (
    <div className="comic-card">
      <img src={image} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        
      </div>
    </div>
  );
};

export default ComicCard;


