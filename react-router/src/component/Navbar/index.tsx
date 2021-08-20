import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './navigation';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const showNavbarHandler = () => setShowNavbar((val) => !val);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">
          Latest News App
        </NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={showNavbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse collapse ${showNavbar && 'show'}`} id="navbarColor01">
          <Navigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
