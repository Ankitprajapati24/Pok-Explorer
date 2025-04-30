import React from 'react';
import { Search } from 'lucide-react';
import { PokemonTypeOption } from '../types/pokemon';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: PokemonTypeOption;
  setSelectedType: (type: PokemonTypeOption) => void;
  types: PokemonTypeOption[];
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  types,
  isLoading
}) => {
  return (
    <div className="sticky top-[68px] z-10 bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Pokémon by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={isLoading}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as PokemonTypeOption)}
            disabled={isLoading}
            className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none"
          >
            <option value="all">All Types</option>
            {types.filter(type => type !== 'all').map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 17a.75.75 0 01-.55-.24l-3.25-3.5a.75.75 0 111.1-1.02L10 15.148l2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5A.75.75 0 0110 17z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;