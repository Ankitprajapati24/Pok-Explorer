import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute w-16 h-8 bg-red-500 rounded-t-full"></div>
        <div className="absolute bottom-0 w-16 h-8 bg-white rounded-b-full"></div>
        <div className="absolute top-[6.5px] left-[6.5px] w-[50px] h-[50px] bg-white rounded-full border-4 border-gray-800"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-800"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700">Loading Pokémon...</p>
    </div>
  );
};

export default LoadingSpinner;