import React, { useEffect, useState } from 'react';
import ErrorsType from 'src/model/ErrorsType';

interface IDate {
  agree: boolean;
  setAgree: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  errors: ErrorsType;
}

const Checkbox: React.FC<IDate> = ({ agree, setAgree, errors }) => {
  const [valid, setValid] = useState<string>('');

  useEffect(() => {
    setValid(!agree && errors.agree !== undefined ? 'is-invalid' : '');
  }, [agree, errors]);

  return (
    <fieldset className="form-group" style={{ marginTop: '20px' }}>
      <div className="form-check">
        <input
          className={`form-check-input ${valid}`}
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
