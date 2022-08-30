import { useContext } from 'react';

import { SearchContext } from '../../contexts/SearchContext';

function TypeInput() {
  // Get the type from the search context
  const { type, updateType } = useContext(SearchContext);

  return (
    <div className='type-input'>
      <select 
        value={type}
        onChange={updateType}
      >
        <option value="all" default>All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
        <option value="game">Game</option>
      </select>
    </div>
  );
}

export default TypeInput;
