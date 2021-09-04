import React from 'react';
import CardType from 'src/model/CardType';

interface IFormData {
  formData: CardType;
}

const Card: React.FC<IFormData> = ({ formData }) => {
  const { firstName, lastName, country, birthDate, gender } = formData;

  return (
    <div className="card" style={{ margin: '10px 0' }}>
      <div className="card-body">
        <h4 className="card-title">
          {firstName} {lastName}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">country: {country}</h6>
        <h6 className="card-subtitle mb-2 text-muted">gender: {gender}</h6>
        <h6 className="card-subtitle mb-2 text-muted">date: {birthDate}</h6>
        <p className="card-text">Person is agreed to the Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Card;
