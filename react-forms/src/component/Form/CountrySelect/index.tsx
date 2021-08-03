import React from 'react';

interface ICountrySelect {
  country: string;
  setCountry: (value: string | ((prevVar: string) => string)) => void;
}

const CountrySelect: React.FC<ICountrySelect> = ({ country, setCountry }) => {
  return (
    <div className="form-group">
      <label htmlFor="selectCountry" className="form-label mt-4">
        Country select
      </label>
      <select
        className="form-select"
        id="selectCountry"
        value={country}
        onChange={(e) => setCountry((e.target as HTMLSelectElement).value)}
      >
        <option>Belarus</option>
        <option>Germany</option>
        <option>USA</option>
        <option>Norway</option>
        <option>Canada</option>
      </select>
    </div>
  );
};

export default CountrySelect;
