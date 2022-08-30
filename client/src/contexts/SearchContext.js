import { createContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  // Get search parameter state
  const [search, setSearch] = useSearchParams();

  // Initialize media title and type states
  const [title, setTitle] = useState('');
  const [type, setType] = useState('all');

  // Updates type and title values using search parameters
  useEffect(() => {
    // If search parameters has a value for title, update states
    if (search.get('title') !== null) {
      setTitle(search.get('title'));
      setType(search.get('type'));
    }
  }, []);

  // Updates search parameter values on input change
  useEffect(() => {
    // If title is empty, make search empty
    if (title === '') setSearch();
    // Otherwise, update the search parameters
    else setSearch({ title, type });
  }, [setSearch, title, type]);

  /**
   * Handles search title change
   * @param {object} event The title input change event
   */
  const updateTitle = (event) => {
    // Update the title value
    setTitle(event.target.value);
  }

  /**
   * Handles search type change
   * @param {object} event The type input change event
   */
  const updateType = (event) => {
    // Update the type value
    setType(event.target.value);
  }

  // Save the necessary context information
  const context = { title, updateTitle, type, updateType };

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider };