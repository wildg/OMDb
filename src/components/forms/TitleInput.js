import { useContext } from 'react';

import { SearchContext } from '../../contexts/SearchContext';

function TitleInput() {
  // Get the title from the search context
  const { title, updateTitle } = useContext(SearchContext);

  return (
    <div className='title-input'>
      <input 
        type="text" 
        placeholder='See something great'
        value={title} 
        onChange={updateTitle} />
      <button>
        <img src="/icons/Search.png" alt="Search" />
      </button>
    </div>
  );
}

export default TitleInput;