import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-red-500 shadow-md py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-full bg-white p-2 mr-3">
            <Zap size={24} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-white">PokéExplorer</h1>
        </div>
        <div className="hidden sm:flex space-x-4 text-white text-sm">
          <span className="hover:underline cursor-pointer transition-all duration-200">Home</span>
          <span className="hover:underline cursor-pointer transition-all duration-200">About</span>
          <span className="hover:underline cursor-pointer transition-all duration-200">Contact</span>
        </div>
      </div>
    </header>
  );
};

export default Header;