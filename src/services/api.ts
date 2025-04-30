import { PokemonListResponse, Pokemon } from "../types/pokemon";

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit: number = 150): Promise<PokemonListResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon list');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon details: ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};

export const getAllPokemonTypes = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${BASE_URL}/type`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon types');
    }
    const data = await response.json();
    return data.results.map((type: { name: string }) => type.name);
  } catch (error) {
    console.error('Error fetching Pokemon types:', error);
    throw error;
  }
};