import React from 'react';
import Spinner from './ui/spinner';

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="text-center space-y-4">
        <Spinner size="xl" className="mx-auto" />
        <p className="text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage; 