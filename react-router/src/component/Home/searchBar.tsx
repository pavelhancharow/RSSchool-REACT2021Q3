import React, { ChangeEvent, FormEvent, useState } from 'react';
import SearchParamType from 'src/model/searchParam';

interface ISearchBarProps {
  getAPICards: () => void;
  setWatcher: (val: boolean) => void;
  setSearchParam: (param: SearchParamType | ((param: SearchParamType) => SearchParamType)) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ getAPICards, setWatcher, setSearchParam }) => {
  const [inputVal, setInputVal] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWatcher(true);
    getAPICards();
    setInputVal('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputVal(value);
    setSearchParam((param) => ({ ...param, searchValue: value }));
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit} style={{ padding: '20px 0', width: '380px', margin: '0 auto' }}>
      <input
        className="form-control me-sm-2"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={inputVal}
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit" style={{ marginRight: '10px' }}>
        Search
      </button>
      <button className="btn btn-danger my-2 my-sm-0" onClick={() => setInputVal('')} type="button">
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
