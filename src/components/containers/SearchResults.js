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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const totalResults = useRef(0);
  const pageNumber = useRef(1);

  const { title, type } = useContext(SearchContext);

  /**
   * Calls media search API according to data provided
   * @param {string} title The media title searched
   * @param {string} type One of 'all', 'movie', 'series', or 'episode'
   */
  const search = async (title, type) => {
    const res = await get(title, pageNumber.current, type);

    if (res['Response'] === 'False') {
      setError(res['Error']);
    } else {
      setData((prevData) => prevData.concat(res['Search']));
      totalResults.current = parseInt(res['totalResults']);
      pageNumber.current += 1;
    }

    setLoading(false);
  }

  /**
   * Makes a debounced search to the API for every second of inaction
   */
  const debounceSearch = useCallback(
    debounce(search, 1000), []
  );

  useEffect(() => {
    setLoading(true);
    setError('');
    setData([]);
    pageNumber.current = 1

    title === '' ? setLoading(false) : debounceSearch(title, type);
  }, [title, type, debounceSearch]);

  if (title === '') return <HomePosterRow />;
  if (loading) return <CircularProgress />;
  if (error !== '') return <ErrorText text={error} />;

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