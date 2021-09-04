import React, { useEffect, useState } from 'react';
import ErrorsType from 'src/model/ErrorsType';

interface IGender {
  gender: string;
  setGender: (value: string | ((prevVar: string) => string)) => void;
  errors: ErrorsType;
}

const Gender: React.FC<IGender> = ({ gender, setGender, errors }) => {
  const [valid, setValid] = useState<string>('');

  useEffect(() => {
    setValid(!gender && errors.gender !== undefined ? 'is-invalid' : '');
  }, [gender, errors]);

  return (
    <fieldset className="form-group">
      <legend className="mt-4">Gender</legend>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className={`form-check-input ${valid}`}
            name="optionsRadios"
            id="optionsRadios1"
            value="male"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === 'male'}
          />
          male
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className={`form-check-input ${valid}`}
            name="optionsRadios"
            id="optionsRadios2"
            value="female"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === 'female'}
          />
          female
          <div className="invalid-feedback">Sorry, Gender not selected</div>
        </label>
      </div>
    </fieldset>
  );
};

export default Gender;
