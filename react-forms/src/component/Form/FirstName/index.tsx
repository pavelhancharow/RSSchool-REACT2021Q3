import React from 'react';

interface IFirstName {
  firstName: string;
  setFirstName: (value: string | ((prevVar: string) => string)) => void;
}

const FirstName: React.FC<IFirstName> = ({ firstName, setFirstName }) => {
  return (
    <div className="form-group">
      <label htmlFor="name" className="form-label mt-4">
        First Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={firstName}
        placeholder="Enter your name"
        onChange={(e) => setFirstName((e.target as HTMLInputElement).value)}
      />
      <div className="valid-feedback">Success! You've done it.</div>
      <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
    </div>
  );
};

export default FirstName;
