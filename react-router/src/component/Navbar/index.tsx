import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>(
    `/${window.location.href.slice(window.location.href.lastIndexOf('/') + 1)}`
  );

  const handleLink = (e: MouseEvent) => {
    const { pathname } = e.target as HTMLAnchorElement;

    setActiveLink(pathname);
  };

  const handleShowNavbar = (e: MouseEvent) => {
    e.preventDefault();
    setShowNavbar((val) => !val);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleLink}>
          Latest News App
        </Link>
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
        <div className={`navbar-collapse collapse ${showNavbar && 'show'}`} id="navbarColor01">
          <Navigation activeLink={activeLink} handleLink={handleLink} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
