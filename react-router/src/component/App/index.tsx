import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';
import Content from '../Content';

import './index.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </Router>
  );
};

export default App;
