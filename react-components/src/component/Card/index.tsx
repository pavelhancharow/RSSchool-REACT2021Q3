import React from 'react';

import like from '../../assets/image/like.svg';
import eye from '../../assets/image/eye.svg';
import cart from '../../assets/image/cart.svg';
import react from '../../assets/image/react.png';

import './index.scss';

const Card: React.FC = () => {
  return (
    <div className="cards">
      <div className="card border-info mb-3" style={{maxWidth: '20rem'}}>
        <img className="card-header" src={react} alt="react" />
        <div className="card-body">
          <h4 className="card-title">Info card title</h4>
          <p className="card-text">About card</p>
        </div>
        <div className="card-footer">
          <div className="icon-container">
            <img src={like} className="icon" alt="like" />
            <span>925</span>
          </div>
          <div className="icon-container">
            <img src={eye} className="icon" alt="eye" />
            <span>10093</span>
          </div>
          <div className="icon-container">
            <img src={cart} className="icon" alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
