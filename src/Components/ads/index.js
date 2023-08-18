// AdItem.js
import React from 'react';
import './style.css'; // Import your CSS file

const AdItem = ({ ad }) => {
  return (
    <div className="ad-item">
      <h3>{ad.title}</h3>
      <p>{ad.description}</p>
    </div>
  );
};

export default AdItem;
