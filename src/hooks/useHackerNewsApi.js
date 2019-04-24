import { useState, useEffect } from 'react';
import axios from 'axios';
import useDebounce from './useDebounce';

const useHackerNewsApi = query => {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const debouncedQuery = useDebounce(query, 200);
  useEffect(() => {
    if (debouncedQuery) {

      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
          const result = await axios(
            `https://hn.algolia.com/api/v1/search?query=${debouncedQuery}`,
          );

          setData(result.data);
        } catch (error) {
          setIsError(true);
        }

        setIsLoading(false);
      };
      fetchData();
    }
  }, [debouncedQuery]);


  return { data, isLoading, isError };
}

export default useHackerNewsApi;
