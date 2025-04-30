import { useState, useEffect } from 'react';
import { Pokemon, PokemonTypeOption } from '../types/pokemon';
import { fetchPokemonList, fetchPokemonDetails } from '../services/api';

export const usePokemon = (limit: number = 150) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<PokemonTypeOption>('all');

  const types: PokemonTypeOption[] = [
    'all',
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
  ];

  const fetchAllPokemon = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const listResponse = await fetchPokemonList(limit);
      
      const pokemonDetailsPromises = listResponse.results.map(({ url }) => 
        fetchPokemonDetails(url)
      );
      
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      setPokemonList(pokemonDetails);
    } catch (err) {
      setError('Failed to fetch Pokémon data. Please try again later.');
      console.error('Error in usePokemon hook:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPokemon();
  }, [limit]);

  const retryFetch = () => {
    fetchAllPokemon();
  };

  return {
    pokemonList,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
    types,
    retryFetch
  };
};