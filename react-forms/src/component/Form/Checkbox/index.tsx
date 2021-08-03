import React from 'react';

interface IDate {
  agree: boolean;
  setAgree: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Checkbox: React.FC<IDate> = ({ agree, setAgree }) => {
  return (
    <fieldset className="form-group" style={{ padding: '20px 0' }}>
      <div className="form-check">
        <input
          className="form-check-input"
          name="agree"
          type="checkbox"
          checked={agree}
          id="agree"
          onChange={() => setAgree((item) => !item)}
        />
        <label className="form-check-label" htmlFor="agree">
          I agree to the Terms and Conditions
        </label>
        <div className="invalid-feedback">Sorry, confirm the processing of personal data</div>
      </div>
    </fieldset>
  );
};

export default Checkbox;
