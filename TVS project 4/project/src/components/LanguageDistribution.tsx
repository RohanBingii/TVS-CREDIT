import React from 'react';
import { Globe } from 'lucide-react';

export const LanguageDistribution: React.FC = () => {
  const languages = [
    { name: 'Hindi', percentage: 42, calls: 6420, color: 'bg-red-500' },
    { name: 'English', percentage: 28, calls: 4284, color: 'bg-blue-500' },
    { name: 'Telugu', percentage: 12, calls: 1836, color: 'bg-green-500' },
    { name: 'Tamil', percentage: 8, calls: 1224, color: 'bg-yellow-500' },
    { name: 'Kannada', percentage: 6, calls: 918, color: 'bg-purple-500' },
    { name: 'Others', percentage: 4, calls: 612, color: 'bg-gray-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <Globe className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Language Distribution</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                <span className="text-sm font-medium text-gray-900">{lang.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{lang.calls.toLocaleString()}</span>
                <span className="text-sm font-semibold text-gray-900">{lang.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual representation */}
        <div className="mt-6">
          <div className="flex rounded-full overflow-hidden h-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className={lang.color}
                style={{ width: `${lang.percentage}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          Total calls today: <span className="font-semibold">15,294</span>
        </div>
      </div>
    </div>
  );
};