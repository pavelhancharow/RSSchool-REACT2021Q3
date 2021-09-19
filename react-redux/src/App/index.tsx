import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

import './index.css';

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
