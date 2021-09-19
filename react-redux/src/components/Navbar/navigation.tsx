import React from 'react';
import { NavLink } from 'react-router-dom';
import routesData from 'src/routes/routesData';

const Navigation: React.FC = () => {
  return (
    <ul className="navbar-nav me-auto">
      {routesData
        .filter((route) => route.name)
        .map((route) => {
          const { path, name } = route;

          return (
            <li className="nav-item" key={path}>
              <NavLink exact className="nav-link" activeClassName="active" to={path}>
                {name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default Navigation;
