import React, { MouseEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'src/hooks/useTypedSelector';
import { setNewsSort } from 'src/store/action-creators/news';

const SortList: React.FC = () => {
  const { sort, sortBy } = useTypedSelector((state) => state.news);
  const dispatch = useDispatch();

  const sortHandler = (e: MouseEvent, val: string) => {
    e.preventDefault();
    dispatch(setNewsSort(val));
  };

  return (
    <ul className="sort">
      {sortBy.map((item) => {
        return (
          <li className="nav-item" key={item}>
            <a
              className={`nav-link ${sort === item ? 'disabled' : ''}`}
              href="/"
              data-value={item}
              onClick={(e) => sortHandler(e, item)}
            >
              {item === 'publishedAt' ? 'published At' : item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SortList;
