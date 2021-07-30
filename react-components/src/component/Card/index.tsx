import React from 'react';
import cardsDB from 'src/db/indexDB';

import './index.scss';

const Card: React.FC = () => {
  const cards = cardsDB.map((card, i) => {
    const {titleImg, likeIcon, eyeIcon, cartIcon} = card;
    const id = i;

    return (
      <div key={id} className="card border-info mb-3" style={{maxWidth: '20rem'}}>
        <img className="card-header" src={titleImg} alt="react" />
        <div className="card-body">
          <h4 className="card-title">Info card title</h4>
          <p className="card-text">About card</p>
        </div>
        <div className="card-footer">
          <div className="icon-container">
            <img src={likeIcon} className="icon" alt="like" />
            <span>925</span>
          </div>
          <div className="icon-container">
            <img src={eyeIcon} className="icon" alt="eye" />
            <span>10093</span>
          </div>
          <div className="icon-container">
            <img src={cartIcon} className="icon" alt="cart" />
          </div>
        </div>
      </div>
    );
  });

  return <div className="cards">{cards}</div>;
};

export default Card;
