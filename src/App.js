import React, { useState } from 'react';
import useHackerNewsApi from './hooks/useHackerNewsApi';
import MainLayout from './layout/MainLayout';
import ResultsList from './components/ResultsList/ResultsList';
import './App.css';

function App() {
  const [query, setQuery] = useState('redux');
  const { data, isLoading, isError } = useHackerNewsApi(query);

  return (
    <MainLayout>
      <input
        className="query-input"
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div className="spacer--small" />
      <ResultsList query={query} hits={data.hits} isLoading={isLoading} isError={isError} />
    </MainLayout>
  );
}

export default App;
