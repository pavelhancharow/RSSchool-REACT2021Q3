import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="row">
        <div className="col-md-12 error">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">Sorry, an error has occured, Requested page not found!</div>
            <div className="error-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => history.push('/')}>
                Take Me Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
