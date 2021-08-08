import React, { useState } from 'react';
import { Article } from 'src/model/cardJSON';
import Cards from '../Card';
import Navbar from '../Navbar';
import Pagination from '../Pagination';
import Spinner from '../Spinner';

import './index.scss';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);
  const [showPages, setShowPages] = useState<number>(5);

  return (
    <>
      <Navbar
        setIsLoading={setIsLoading}
        articles={articles}
        setArticles={setArticles}
        setTotalResults={setTotalResults}
        setActivePage={setActivePage}
        setShowPages={setShowPages}
      />
      <div className="container" style={{ padding: '40px 0' }}>
        {!isLoading ? <Cards articles={articles} /> : <Spinner />}
      </div>
      {articles.length ? (
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          showPages={showPages}
          setShowPages={setShowPages}
          setIsLoading={setIsLoading}
          setArticles={setArticles}
          totalResults={totalResults}
        />
      ) : null}
    </>
  );
};

export default App;
