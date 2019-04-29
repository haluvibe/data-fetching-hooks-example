import React, { Fragment, useState } from 'react';
import useHackerNewsApi from "./hooks/useHackerNewsApi";
import ResultsList from './components/ResultsList/ResultsList';
import './App.css';

function App() {
  const [query, setQuery] = useState('redux');
  const { data, isLoading, isError } = useHackerNewsApi(query);
  console.log(data);
  return (
    <Fragment>
    <div className="spacer--big" />
    <div className="container">
      <input
        className="query-input"
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div className="spacer--small" />
      <ResultsList query={query} hits={data.hits} isLoading={isLoading} isError={isError} />
    </div>
    </Fragment>
  );
}

export default App;
