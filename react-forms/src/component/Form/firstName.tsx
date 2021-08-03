import React, { ChangeEvent, useEffect, useState } from 'react';
import ErrorsType from 'src/model/ErrorsType';

interface IFirstName {
  firstName: string;
  setFirstName: (value: string | ((prevVar: string) => string)) => void;
  errors: ErrorsType;
}

const FirstName: React.FC<IFirstName> = ({ firstName, setFirstName, errors }) => {
  const [valid, setValid] = useState<string>('');

  useEffect(() => {
    if (!firstName && errors.firstName === '') {
      setValid('is-invalid');
    } else if (firstName) {
      setValid('is-valid');
    } else {
      setValid('');
    }
  }, [firstName, errors]);

  return (
    <div className="form-group">
      <label htmlFor="name" className="form-label mt-4">
        First Name
      </label>
      <input
        type="text"
        className={`form-control ${valid}`}
        id="name"
        value={firstName}
        placeholder="Enter your name"
        onChange={(e) => setFirstName((e.target as HTMLInputElement).value)}
      />
      <div className="valid-feedback">Success! You've done it.</div>
      <div className="invalid-feedback">Sorry, First Name is incorrect</div>
    </div>
  );
};

export default FirstName;
