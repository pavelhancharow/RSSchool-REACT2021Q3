import React, { FormEvent, useRef } from 'react';
import searchData from '../../../data/searchData';

interface SearchBarProps {
  onFetchNews: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFetchNews }) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchData.isToGetFetch = true;
    onFetchNews();

    ref.current!.value = '';
  };

  const changeHandler = () => {
    searchData.searchValue = ref.current!.value;
  };

  return (
    <form className="d-flex" onSubmit={submitHandler} style={{ padding: '20px 0', width: '380px', margin: '0 auto' }}>
      <input ref={ref} className="form-control me-sm-2" type="text" placeholder="Search" onChange={changeHandler} />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit" style={{ marginRight: '10px' }}>
        Search
      </button>
      <button
        className="btn btn-danger my-2 my-sm-0"
        onClick={() => {
          ref.current!.value = '';
        }}
        type="button"
      >
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
