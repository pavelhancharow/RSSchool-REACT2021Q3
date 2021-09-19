import React from 'react';

import './index.css';

const Spinner: React.FC = () => {
  return (
    <div className="spinner" style={{ display: 'flex' }}>
      <div className="spinner-container">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
