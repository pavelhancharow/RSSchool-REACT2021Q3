import React, { MouseEvent, useState } from 'react';
import { Article } from 'src/model/cardJSON';
import { sortAPICards } from 'src/service/api';

interface ISortNav {
  setIsLoading: (value: boolean) => void;
  setArticles: (value: Article[]) => void;
  setShowNavbar: (value: boolean) => void;
}

const SortNav: React.FC<ISortNav> = ({ setIsLoading, setArticles, setShowNavbar }) => {
  const sortArr = ['relevancy', 'popularity', 'publishedAt'];
  const [sort, setSort] = useState<string>(sortArr[0]);

  const handleSort = (e: MouseEvent) => {
    e.preventDefault();
    setShowNavbar(false);

    const { value } = (e.target as HTMLElement).dataset;

    setIsLoading(true);
    setSort(value || sortArr[0]);

    const response = sortAPICards(value);
    response
      .then((res) => setArticles(res.articles))
      .catch((err) => new Error(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {sortArr.map((item, i) => {
        const idx = i;

        return (
          <li className="nav-item" key={idx}>
            <a
              className={`nav-link ${sort === item ? 'active' : null}`}
              href="/"
              data-value={item}
              onClick={handleSort}
            >
              {item}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SortNav;
