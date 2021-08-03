import React from 'react';

interface IDate {
  birthDate: string;
  setBirthDate: (value: string | ((prevVar: string) => string)) => void;
}

const Date: React.FC<IDate> = ({ birthDate, setBirthDate }) => {
  return (
    <fieldset>
      <legend className="form-label mt-4">Date of Birthday</legend>
      <div className="form-group">
        <input
          className="form-control"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate((e.target as HTMLInputElement).value)}
        />
      </div>
    </fieldset>
  );
};

export default Date;
