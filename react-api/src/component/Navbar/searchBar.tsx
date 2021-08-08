import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Article } from 'src/model/cardJSON';
import getAPICards from 'src/service/api';

interface ISearchBarProps {
  setIsLoading: (value: boolean) => void;
  setArticles: (value: Article[]) => void;
  setTotalResults: (value: number) => void;
  setShowNavbar: (value: boolean) => void;
  setActivePage: (val: number | ((val: number) => number)) => void;
  setShowPages: (val: number | ((val: number) => number)) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  setIsLoading,
  setArticles,
  setTotalResults,
  setShowNavbar,
  setActivePage,
  setShowPages
}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowNavbar(false);
    setIsLoading(true);

    const response = getAPICards(searchValue);
    response
      .then((res) => {
        setArticles(res.articles);
        setTotalResults(res.totalResults);
      })
      .catch((err) => new Error(err))
      .finally(() => {
        setSearchValue('');
        setIsLoading(false);
        setActivePage(1);
        setShowPages(5);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-sm-2"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchValue}
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
