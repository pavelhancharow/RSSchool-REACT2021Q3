import React, { MouseEvent, useState } from 'react';
import { Article } from 'src/model/cardJSON';
import SearchBar from './searchBar';
import SortNav from './sortNav';

interface INavbarProps {
  setIsLoading: (value: boolean) => void;
  articles: Article[];
  setArticles: (value: Article[]) => void;
  setTotalResults: (value: number) => void;
  setActivePage: (val: number | ((val: number) => number)) => void;
  setShowPages: (val: number | ((val: number) => number)) => void;
}

const Navbar: React.FC<INavbarProps> = ({
  setIsLoading,
  articles,
  setArticles,
  setTotalResults,
  setActivePage,
  setShowPages
}) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleToHome = (e: MouseEvent) => {
    e.preventDefault();
    setArticles([]);
    setActivePage(1);
    setShowPages(5);
  };

  const handleShowNavbar = (e: MouseEvent) => {
    e.preventDefault();
    setShowNavbar((val) => !val);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={handleToHome}>
          Latest News App
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleShowNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse collapse ${showNavbar ? 'show' : null}`} id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {articles.length ? (
              <SortNav setArticles={setArticles} setIsLoading={setIsLoading} setShowNavbar={setShowNavbar} />
            ) : null}
          </ul>
          <SearchBar
            setIsLoading={setIsLoading}
            setArticles={setArticles}
            setTotalResults={setTotalResults}
            setShowNavbar={setShowNavbar}
            setActivePage={setActivePage}
            setShowPages={setShowPages}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
