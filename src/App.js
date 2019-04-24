import React, { Fragment, useState } from 'react';
import useHackerNewsApi from "./hooks/useHackerNewsApi";

function App() {
  const [query, setQuery] = useState('redux');
  const { data, isLoading, isError } = useHackerNewsApi(query);
  console.log(data);
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(({objectID, url, title}) => (
            (objectID && title && url) && (
              <li key={objectID}>
                <a href={url}>{title}</a>
              </li>
            )
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default App;
