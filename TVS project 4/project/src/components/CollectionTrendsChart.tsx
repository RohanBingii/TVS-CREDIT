import React from 'react';

export const CollectionTrendsChart: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const collectionsData = [65, 72, 68, 75, 70, 73, 68];
  const targetLine = 70;

  return (
    <div className="h-64 relative">
      {/* Target line */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t-2 border-dashed border-red-300"></div>
        <span className="absolute right-0 -top-2 text-xs text-red-600 bg-white px-1">
          Target: {targetLine}%
        </span>
      </div>
      
      {/* Chart bars */}
      <div className="flex items-end justify-between h-full space-x-2">
        {collectionsData.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex items-end justify-center">
              <div
                className={`w-full rounded-t transition-all duration-300 ${
                  value >= targetLine ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'
                }`}
                style={{ height: `${(value / 80) * 200}px` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              <div>{days[index]}</div>
              <div className="font-semibold">{value}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};