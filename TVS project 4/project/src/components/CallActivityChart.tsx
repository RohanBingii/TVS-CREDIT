import React from 'react';

export const CallActivityChart: React.FC = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const data = [
    12, 8, 5, 3, 2, 4, 8, 15, 28, 42, 58, 67, 72, 68, 65, 59, 71, 89, 92, 87, 76, 58, 34, 22
  ];

  const maxValue = Math.max(...data);

  return (
    <div className="h-64">
      <div className="flex items-end justify-between h-full space-x-1">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-blue-100 rounded-t flex items-end justify-center relative">
              <div
                className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                style={{ height: `${(value / maxValue) * 200}px` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {index}:00
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};