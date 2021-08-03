import React from 'react';

interface IGender {
  sex: boolean;
  setSex: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  gender: string;
}

const Gender: React.FC<IGender> = ({ sex, setSex, gender }) => {
  return (
    <fieldset>
      <legend className="form-label mt-4">Gender</legend>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="gender"
          checked={sex}
          onChange={() => setSex((item) => !item)}
        />
        <label className="form-check-label" htmlFor="gender">
          {gender}
        </label>
      </div>
    </fieldset>
  );
};

export default Gender;
