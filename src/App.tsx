import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { usePokemon } from './hooks/usePokemon';

function App() {
  const {
    pokemonList,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
    types,
    retryFetch
  } = usePokemon(150);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        types={types}
        isLoading={isLoading}
      />

      <main className="pb-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} retry={retryFetch} />
        ) : (
          <PokemonList 
            pokemonList={pokemonList}
            searchTerm={searchTerm}
            selectedType={selectedType}
          />
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 text-sm">
        <p>Powered by <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="underline">PokéAPI</a> | Created with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;