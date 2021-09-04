import React, { ChangeEvent, useEffect, useState } from 'react';
import ErrorsType from 'src/model/ErrorsType';

interface ILastName {
  lastName: string;
  setLastName: (value: string | ((prevVar: string) => string)) => void;
  errors: ErrorsType;
}

const LastName: React.FC<ILastName> = ({ lastName, setLastName, errors }) => {
  const [valid, setValid] = useState<string>('');

  useEffect(() => {
    if (!lastName && errors.lastName === '') {
      setValid('is-invalid');
    } else if (lastName) {
      setValid('is-valid');
    } else {
      setValid('');
    }
  }, [lastName, errors]);

  return (
    <div className="form-group">
      <label htmlFor="lastName" className="form-label mt-4">
        Last Name
      </label>
      <input
        type="text"
        className={`form-control ${valid}`}
        id="lastName"
        value={lastName}
        placeholder="Enter your last name"
        onChange={(e) => setLastName((e.target as HTMLInputElement).value)}
      />
      <div className="valid-feedback">Success! You've done it.</div>
      <div className="invalid-feedback">Sorry, Last Name is incorrect</div>
    </div>
  );
};

export default LastName;
