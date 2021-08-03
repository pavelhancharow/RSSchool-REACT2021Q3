import React, { useEffect, useState } from 'react';
import ErrorsType from 'src/model/ErrorsType';

interface IDate {
  birthDate: string;
  setBirthDate: (value: string | ((prevVar: string) => string)) => void;
  errors: ErrorsType;
}

const Date: React.FC<IDate> = ({ birthDate, setBirthDate, errors }) => {
  const [valid, setValid] = useState<string>('');

  useEffect(() => {
    if (!birthDate && errors.birthDate === '') {
      setValid('is-invalid');
    } else if (birthDate) {
      setValid('is-valid');
    } else {
      setValid('');
    }
  }, [birthDate, errors]);

  return (
    <fieldset>
      <legend className="form-label mt-4">Date of Birthday</legend>
      <div className="form-group">
        <input
          className={`form-control ${valid}`}
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate((e.target as HTMLInputElement).value)}
        />
        <div className="valid-feedback">Success! You've done it.</div>
        <div className="invalid-feedback">Sorry, choose your Birthday</div>
      </div>
    </fieldset>
  );
};

export default Date;
