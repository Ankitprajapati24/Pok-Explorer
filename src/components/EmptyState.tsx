import React from 'react';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  searchTerm: string;
  selectedType: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchTerm, selectedType }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mx-auto my-10 bg-gray-50 rounded-lg border border-gray-200 max-w-md">
      <SearchX size={40} className="text-gray-400 mb-4" />
      <h2 className="text-xl font-bold text-gray-700 mb-2">No Pokémon Found</h2>
      <p className="text-gray-600 text-center">
        {searchTerm && selectedType !== 'all'
          ? `No Pokémon matching "${searchTerm}" with type "${selectedType}" found.`
          : searchTerm
          ? `No Pokémon matching "${searchTerm}" found.`
          : `No Pokémon with type "${selectedType}" found.`}
      </p>
      <p className="text-gray-500 text-center mt-2">Try adjusting your search or filter.</p>
    </div>
  );
};

export default EmptyState;