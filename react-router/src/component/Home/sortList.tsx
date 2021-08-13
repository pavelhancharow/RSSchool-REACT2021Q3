import React, { MouseEvent, useEffect, useState } from 'react';
import SearchParamType from 'src/model/searchParam';

interface ISortList {
  getAPICards: () => void;
  searchParam: SearchParamType;
  setSearchParam: (param: SearchParamType | ((param: SearchParamType) => SearchParamType)) => void;
}

const SortList: React.FC<ISortList> = ({ getAPICards, searchParam, setSearchParam }) => {
  const { sort } = searchParam;
  const sortArr = ['relevancy', 'popularity', 'publishedAt'];
  const [watcher, setWatcher] = useState<boolean>(false);

  const handleSort = (e: MouseEvent) => {
    e.preventDefault();
    const { value } = (e.target as HTMLElement).dataset;

    setSearchParam((param) => ({ ...param, sort: value || sortArr[0] }));
    setWatcher(true);
  };

  useEffect(() => {
    if (watcher) getAPICards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const getItemsList = () => {
    return sortArr.map((item) => {
      return (
        <li className="nav-item" key={item}>
          <a
            className={`nav-link ${searchParam.sort === item ? 'disabled' : null}`}
            href="/"
            data-value={item}
            onClick={handleSort}
          >
            {item === 'publishedAt' ? 'published At' : item}
          </a>
        </li>
      );
    });
  };

  return <ul className="sort">{getItemsList()}</ul>;
};

export default SortList;
