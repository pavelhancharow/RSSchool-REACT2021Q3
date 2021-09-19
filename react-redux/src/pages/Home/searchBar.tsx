import React, { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setNewsValue } from 'src/store/action-creators/news';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setNewsValue(ref.current!.value));

    ref.current!.value = '';
  };

  return (
    <form className="d-flex" onSubmit={submitHandler} style={{ padding: '20px 0', width: '380px', margin: '0 auto' }}>
      <input ref={ref} className="form-control me-sm-2" type="text" placeholder="Search" />
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
