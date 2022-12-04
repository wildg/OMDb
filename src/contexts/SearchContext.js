import { createContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [search, setSearch] = useSearchParams();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('all');

  useEffect(() => {
    if (search.get('title') !== null) {
      setTitle(search.get('title'));
      setType(search.get('type'));
    }
  }, []);

  useEffect(() => {
    title === '' ? setSearch() : setSearch({ title, type });
  }, [setSearch, title, type]);

  /**
   * Handles search title change
   * @param {object} event The title input change event
   */
  const updateTitle = (event) => {
    setTitle(event.target.value);
  }

  /**
   * Handles search type change
   * @param {object} event The type input change event
   */
  const updateType = (event) => {
    setType(event.target.value);
  }

  const context = { title, updateTitle, type, updateType };

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider };