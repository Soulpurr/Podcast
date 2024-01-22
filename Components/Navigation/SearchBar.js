import { useRouter } from 'next/router';
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const router=useRouter()
  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/SearchItem/${query}`)
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-500"
          type="text"
          placeholder="Search for name of podcast"
          value={query}
          onChange={handleChange}
        />
        <button
        onClick={handleSubmit}
          className="mr-2 flex-shrink-0 bg-gray-700 hover:bg-gray-800 border-gray-700 hover:border-gray-800 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
export default SearchBar