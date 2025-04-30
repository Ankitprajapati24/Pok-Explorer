import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  retry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mx-auto my-10 bg-red-50 rounded-lg border border-red-200 max-w-md">
      <AlertTriangle size={40} className="text-red-500 mb-4" />
      <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
      <p className="text-red-600 text-center mb-4">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;