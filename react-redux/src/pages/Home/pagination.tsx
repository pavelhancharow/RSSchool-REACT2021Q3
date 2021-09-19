import React, { MouseEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'src/hooks/useTypedSelector';
import { setNewsPage, setNewsShowPage } from 'src/store/action-creators/news';

const Pagination: React.FC = () => {
  const { limit, total, amountPages } = useTypedSelector((state) => state.news);
  let { page: activePage, showPages } = useTypedSelector((state) => state.news);
  const dispatch = useDispatch();

  const [result, setResult] = useState<JSX.Element[]>([]);
  const [watcher, setWatcher] = useState<boolean>(false);

  const handlePage = (e: MouseEvent, n: number) => {
    e.preventDefault();

    dispatch(setNewsPage(n));
    setWatcher(true);
  };

  const changeCurrPage = (n: number) => {
    dispatch(setNewsPage((activePage += n)));
    dispatch(setNewsShowPage((showPages += n)));
  };

  const nextPagesHandler = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrPage(amountPages);
    setWatcher(true);
  };

  const prevPagesHandler = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrPage(-amountPages);
    setWatcher(true);
  };

  useEffect(() => {
    if (watcher) {
      setWatcher(false);
    }

    for (let i = showPages - (amountPages - 1); i <= showPages; i += 1) {
      const item = (
        <li className={`page-item ${activePage === i ? 'active' : ''}`} key={i}>
          <a className="page-link" href="/" data-page={i} onClick={(e) => handlePage(e, i)}>
            {i}
          </a>
        </li>
      );
      setResult((curr) => [...curr, item]);
    }

    return () => setResult([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watcher]);

  return (
    <div style={{ display: 'flex', paddingBottom: '40px' }}>
      <ul className="pagination" style={{ margin: '0 auto' }}>
        <li className={`page-item ${showPages === amountPages ? 'disabled' : ''}`}>
          <a className="page-link" href="/" onClick={prevPagesHandler}>
            &laquo;
          </a>
        </li>
        {result}
        <li className={`page-item ${showPages > Math.floor(total / limit) ? 'disabled' : ''}`}>
          <a className="page-link" href="/" onClick={nextPagesHandler}>
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
