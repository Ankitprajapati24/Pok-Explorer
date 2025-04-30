import React from 'react';
import { Pokemon, PokemonTypeOption } from '../types/pokemon';
import PokemonCard from './PokemonCard';
import EmptyState from './EmptyState';

interface PokemonListProps {
  pokemonList: Pokemon[];
  searchTerm: string;
  selectedType: PokemonTypeOption;
}

const PokemonList: React.FC<PokemonListProps> = ({ 
  pokemonList, 
  searchTerm, 
  selectedType 
}) => {
  const filteredPokemon = pokemonList.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || 
      pokemon.types.some(typeInfo => typeInfo.type.name === selectedType);
    
    return matchesSearch && matchesType;
  });

  if (filteredPokemon.length === 0) {
    return <EmptyState searchTerm={searchTerm} selectedType={selectedType} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {filteredPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;