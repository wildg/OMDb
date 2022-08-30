import { useContext, useEffect, useState, useRef, useCallback } from 'react'
import { debounce } from 'lodash';

import get from '../../js/get';
import SearchCard from '../cards/SearchCard';
import ErrorText from '../text/ErrorText';

import { CircularProgress, Grid } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component'

import { SearchContext } from '../../contexts/SearchContext'
import HomePosterRow from '../billboards/HomePosterRow';

function SearchResults() {
  // Initialize states
  const [error, setError] = useState('');         // Error string from API call
  const [loading, setLoading] = useState(false);  // Wheter or not data is loading
  const [data, setData] = useState([]);           // Data from API call

  // Initialize references
  const totalResults = useRef(0); // Total results found
  const pageNumber = useRef(1);   // Current page number

  // Get search information from the search context
  const { title, type } = useContext(SearchContext);

  /**
   * Calls media search API according to data provided
   * @param {string} title The media title searched
   * @param {string} type One of 'all', 'movie', 'series', or 'episode'
   */
  const search = async (title, type) => {
    // Get the title and type information
    const res = await get(title, pageNumber.current, type);

    // If the response was false, set an error
    if (res['Response'] === 'False') setError(res['Error']);

    // Otherwise, update the data, total results, and page number
    else {
      setData((prevData) => prevData.concat(res['Search']));
      totalResults.current = parseInt(res['totalResults']);
      pageNumber.current += 1;
    }

    // Set loading to be false
    setLoading(false);
  }

  /**
   * Makes a debounced search to the API for every second of inaction
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce(search, 1000), []
  );

  // Updates data on search input change
  useEffect(() => {
    // Reset loading, error, data, and page number states
    setLoading(true);
    setError('');
    setData([]);
    pageNumber.current = 1

    // If title is empty, set loading to false
    if (title === '') setLoading(false);

    // Otherwise, perform debounced search
    else debounceSearch(title, type);
  }, [title, type, debounceSearch]);

  // If the title is empty, return popular posters
  if (title === '') return <HomePosterRow />;

  // If data is still loading, return the circular progress component
  if (loading) return <CircularProgress />;

  // If there is an error, return that error
  else if (error !== '') return <ErrorText text={error} />;

  // Otherwise, return the data
  return (
    <div className="infinite-scroll-container">
      <InfiniteScroll
        className="infinite-scroll"
        dataLength={data.length}
        next={() => search(title, type)}
        hasMore={data.length < totalResults.current}
        loader={<CircularProgress />}
      >
        <Grid container>
          {data.map(SearchCard)}
        </Grid>
      </InfiniteScroll>
      <h4 className='search-total-results'>
        {totalResults.current} results
      </h4>
    </div>
  );
}

export default SearchResults;