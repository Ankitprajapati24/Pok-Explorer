import React from 'react';
import { Pokemon } from '../types/pokemon';
import { typeColors } from '../utils/colors';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const formatPokemonId = (id: number): string => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  const formatPokemonName = (name: string): string => {
    return name.split('-')[0].charAt(0).toUpperCase() + name.split('-')[0].slice(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-lg">
      <div className="p-4 pb-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">{formatPokemonName(pokemon.name)}</h2>
          <span className="text-gray-500 font-medium">{formatPokemonId(pokemon.id)}</span>
        </div>
      </div>
      <div className="relative p-4 pt-0">
        <div className="relative flex justify-center">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name}
            loading="lazy"
            className="h-36 w-36 object-contain z-10"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2 justify-center">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className={`${
                typeColors[typeInfo.type.name] || 'bg-gray-200'
              } px-3 py-1 rounded-full text-xs font-medium text-white`}
            >
              {typeInfo.type.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;