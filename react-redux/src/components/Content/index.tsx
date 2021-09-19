import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import routesData from 'src/routes/routesData';

import './index.css';

const Content: React.FC = () => {
  const location = useLocation();

  return (
    <div className="content">
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" key={location.key} unmountOnExit>
          <Switch location={location}>
            {routesData.map(({ path, Component }) => (
              <Route key={path} exact={path !== '*'} path={path}>
                <div className="page">
                  <Component />
                </div>
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Content;
