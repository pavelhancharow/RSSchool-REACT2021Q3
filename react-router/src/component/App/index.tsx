import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchParamType from 'src/model/searchParam';
import About from '../About';
import ErrorPage from '../Error';
import Home from '../Home';
import Details from '../Details';
import Navbar from '../Navbar';

import './index.scss';

const searchParamInit: SearchParamType = {
  searchValue: '',
  sort: 'relevancy',
  activePage: 1,
  showPages: 5,
  totalResults: 0,
  countPaginationOnPage: 5,
  idDetails: 0,
  qInTitle: ''
};

const App: React.FC = () => {
  const [searchParam, setSearchParam] = useState<SearchParamType>(searchParamInit);
  const [watcher, setWatcher] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home watcher={watcher} setWatcher={setWatcher} searchParam={searchParam} setSearchParam={setSearchParam} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path={`/details/${searchParam.idDetails}`}>
            <Details searchParam={searchParam} />
          </Route>
          <Route path="*" exact>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
