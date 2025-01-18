import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      {/* Profile section */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-2">
          <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Post content */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <div className="w-20 h-8 bg-gray-300 rounded"></div>
        <div className="w-20 h-8 bg-gray-300 rounded"></div>
        <div className="w-20 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
