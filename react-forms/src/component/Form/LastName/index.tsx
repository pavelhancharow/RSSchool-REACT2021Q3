import React from 'react';

interface ILastName {
  lastName: string;
  setLastName: (value: string | ((prevVar: string) => string)) => void;
}

const LastName: React.FC<ILastName> = ({ lastName, setLastName }) => {
  return (
    <div className="form-group">
      <label htmlFor="lastName" className="form-label mt-4">
        Last Name
      </label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        value={lastName}
        placeholder="Enter your last name"
        onChange={(e) => setLastName((e.target as HTMLInputElement).value)}
      />
      <div className="valid-feedback">Success! You've done it.</div>
      <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
    </div>
  );
};

export default LastName;
