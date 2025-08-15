import React from 'react';

export const LanguagePerformanceChart: React.FC = () => {
  const languages = [
    { name: 'Hindi', rpc: 78, conversion: 42, calls: 6420 },
    { name: 'English', rpc: 82, conversion: 45, calls: 4284 },
    { name: 'Telugu', rpc: 75, conversion: 38, calls: 1836 },
    { name: 'Tamil', rpc: 73, conversion: 36, calls: 1224 },
    { name: 'Kannada', rpc: 70, conversion: 34, calls: 918 },
    { name: 'Bengali', rpc: 68, conversion: 32, calls: 612 }
  ];

  return (
    <div className="space-y-4">
      {languages.map((lang) => (
        <div key={lang.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">{lang.name}</span>
            <span className="text-xs text-gray-500">{lang.calls.toLocaleString()} calls</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>RPC Rate</span>
                <span>{lang.rpc}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${lang.rpc}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Conversion</span>
                <span>{lang.conversion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${lang.conversion}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};