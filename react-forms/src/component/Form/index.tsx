import React, { useEffect, useState } from 'react';
import CardType from 'src/model/CardType';
import ErrorsType from 'src/model/ErrorsType';
import Checkbox from './checkbox';
import CountrySelect from './countrySelect';
import Date from './date';
import FirstName from './firstName';
import Gender from './gender';
import LastName from './lastName';

interface ISetFormData {
  setFormData: (state: CardType[] | ((prevVar: CardType[]) => CardType[])) => void;
}

const Form: React.FC<ISetFormData> = ({ setFormData }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);
  const [sex, setSex] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('male');
  const [errors, setErrors] = useState<ErrorsType>({});

  useEffect(() => {
    setGender(sex ? 'female' : 'male');
  }, [sex]);

  const validate = () => {
    setErrors({});

    if (!agree) setErrors((state) => ({ ...state, agree }));
    if (!firstName) setErrors((state) => ({ ...state, firstName }));
    if (!lastName) setErrors((state) => ({ ...state, lastName }));
    if (!birthDate) setErrors((state) => ({ ...state, birthDate }));
    if (!country) setErrors((state) => ({ ...state, country }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (!agree || !firstName || !lastName || !birthDate || !country) return;

    setFormData((state) => [...state, { firstName, lastName, birthDate, country, gender, agree }]);
  };

  return (
    <form style={{ marginBottom: '30px' }} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Data Form</legend>
        <FirstName firstName={firstName} setFirstName={setFirstName} errors={errors} />
        <LastName lastName={lastName} setLastName={setLastName} errors={errors} />
        <CountrySelect country={country} setCountry={setCountry} errors={errors} />
        <Gender sex={sex} setSex={setSex} gender={gender} />
        <Date birthDate={birthDate} setBirthDate={setBirthDate} errors={errors} />
        <Checkbox agree={agree} setAgree={setAgree} errors={errors} />
        <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
