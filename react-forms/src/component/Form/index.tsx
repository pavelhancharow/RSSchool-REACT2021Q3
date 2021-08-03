import React, { useEffect, useState } from 'react';
import CardType from 'src/model/CardType';
import Checkbox from './Checkbox';
import CountrySelect from './CountrySelect';
import Date from './Date';
import FirstName from './FirstName';
import Gender from './Gender';
import LastName from './LastName';

interface ISetFormData {
  setFormData: (state: CardType[] | ((prevVar: CardType[]) => CardType[])) => void;
}

type ValidType = {
  inputValidClass: string[];
};

const valid: ValidType = {
  inputValidClass: ['is-valid', 'is-invalid']
};

const Form: React.FC<ISetFormData> = ({ setFormData }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [country, setCountry] = useState<string>('Belarus');
  const [agree, setAgree] = useState<boolean>(false);
  const [sex, setSex] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('male');

  useEffect(() => {
    setGender(sex ? 'female' : 'male');
  }, [sex]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((state) => [...state, { firstName, lastName, birthDate, country, gender, agree }]);
  };

  return (
    <form style={{ marginBottom: '30px' }} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Data Form</legend>
        <FirstName firstName={firstName} setFirstName={setFirstName} />
        <LastName lastName={lastName} setLastName={setLastName} />
        <CountrySelect country={country} setCountry={setCountry} />
        <Gender sex={sex} setSex={setSex} gender={gender} />
        <Date birthDate={birthDate} setBirthDate={setBirthDate} />
        <Checkbox agree={agree} setAgree={setAgree} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
