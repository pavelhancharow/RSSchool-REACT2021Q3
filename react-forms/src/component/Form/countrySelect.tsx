import React, { useEffect, useState } from 'react';
import ErrorsType from 'src/model/ErrorsType';

interface ICountrySelect {
  country: string;
  setCountry: (value: string | ((prevVar: string) => string)) => void;
  errors: ErrorsType;
}

const CountrySelect: React.FC<ICountrySelect> = ({ country, setCountry, errors }) => {
  const [valid, setValid] = useState<string>('');

  useEffect(() => {
    if (!country && errors.country === '') {
      setValid('is-invalid');
    } else if (country) {
      setValid('is-valid');
    } else {
      setValid('');
    }
  }, [country, errors]);

  return (
    <div className="form-group">
      <label htmlFor="selectCountry" className="form-label mt-4">
        Country select
      </label>
      <select
        className={`form-select ${valid}`}
        id="selectCountry"
        value={country}
        onChange={(e) => setCountry((e.target as HTMLSelectElement).value)}
      >
        <option> </option>
        <option>Belarus</option>
        <option>Germany</option>
        <option>USA</option>
        <option>Norway</option>
        <option>Canada</option>
      </select>
      <div className="valid-feedback">Success! You've done it.</div>
      <div className="invalid-feedback">Sorry, Country is not select</div>
    </div>
  );
};

export default CountrySelect;
