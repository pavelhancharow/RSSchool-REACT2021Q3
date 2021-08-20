import React, { MouseEvent, useEffect, useState } from 'react';
import searchData from '../../../data/searchData';

interface SortListProps {
  onFetchNews: () => void;
}

const SortList: React.FC<SortListProps> = ({ onFetchNews }) => {
  const [watcher, setWatcher] = useState<boolean>(false);
  const { sortBy, activeSort } = searchData;

  const sortHandler = (e: MouseEvent) => {
    e.preventDefault();

    const { value } = (e.target as HTMLElement).dataset;
    searchData.activeSort = value || searchData.sortBy[0];

    setWatcher(true);
  };

  useEffect(() => {
    if (watcher) {
      onFetchNews();
      setWatcher(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watcher]);

  return (
    <ul className="sort">
      {sortBy.map((item) => {
        return (
          <li className="nav-item" key={item}>
            <a
              className={`nav-link ${activeSort === item ? 'disabled' : ''}`}
              href="/"
              data-value={item}
              onClick={sortHandler}
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
