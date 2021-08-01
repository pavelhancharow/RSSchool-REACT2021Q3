import React from 'react';

import './index.scss';

const SearchBar: React.FC = () => {
  return (
    <form className="d-flex bg-primary form">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={(e) => e.preventDefault()}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
