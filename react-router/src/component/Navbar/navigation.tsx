import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

interface INavigation {
  activeLink: string;
  handleLink: (e: MouseEvent) => void;
}

const Navigation: React.FC<INavigation> = ({ activeLink, handleLink }) => {
  const links = ['/', '/features', '/pricing', '/about'];

  const Links = () => {
    return links.map((link) => {
      return (
        <li className="nav-item" key={link}>
          <Link className={`nav-link ${activeLink === link && 'active'}`} to={link} onClick={handleLink}>
            {link === links[0] ? 'home' : link.slice(1)}
          </Link>
        </li>
      );
    });
  };

  return <ul className="navbar-nav me-auto">{Links()}</ul>;
};

export default Navigation;
