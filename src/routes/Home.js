import SearchResults from '../components/containers/SearchResults';
import SearchForm from '../components/forms/SearchForm';

import { SearchProvider } from '../contexts/SearchContext';

function Home() {
  return (
    <SearchProvider>
      <SearchForm />
      <SearchResults />
    </SearchProvider>
  );
}

export default Home;
