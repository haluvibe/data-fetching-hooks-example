import React from 'react';
import PropTypes from 'prop-types';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Empty from '../Empty/Empty';

const ResultsList = ({hits, isError, isLoading, query = ''}) => {
  if (isError) return <Error />;
  if (isLoading) return <Loading />;
  if (!query || hits.length === 0) return <Empty />;

  return (
    <ul className={"results-list"}>
      {hits.map(({objectID, url, title}) => (
        (objectID && title && url) && (
          <li className={"results-list__element"} key={objectID}>
            <a className={"results-list__link"} href={url}>{title}</a>
          </li>
        )
      ))}
    </ul>
  )
};

ResultsList.propTypes = {
  query: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  hits: PropTypes.array.isRequired
}

export default ResultsList;
