import React from 'react';
import SearchBar from '../Searchbar';
import Card from '../Card';

const App: React.FC = () => {
  return (
    <div className="container-sm container-md container-lg container-xl container-xxl">
      <h2>Search Bar</h2>
      <SearchBar />
      <h2>Cards</h2>
      <Card />
    </div>
  );
};

export default App;
