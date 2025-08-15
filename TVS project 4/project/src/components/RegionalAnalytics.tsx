import React from 'react';
import { MapPin } from 'lucide-react';

export const RegionalAnalytics: React.FC = () => {
  const regions = [
    { name: 'North', collections: '₹12.8Cr', rate: 72, growth: '+8.2%', customers: 42850 },
    { name: 'South', collections: '₹15.2Cr', rate: 68, growth: '+5.7%', customers: 38920 },
    { name: 'West', collections: '₹10.4Cr', rate: 65, growth: '+3.1%', customers: 24680 },
    { name: 'East', collections: '₹8.9Cr', rate: 63, growth: '+6.4%', customers: 19392 }
  ];

  const getGrowthColor = (growth: string) => {
    return growth.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-4">
      {regions.map((region) => (
        <div key={region.name} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="font-semibold text-gray-900">{region.name}</span>
            </div>
            <span className={`text-sm font-medium ${getGrowthColor(region.growth)}`}>
              {region.growth}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-600">Collections</p>
              <p className="font-semibold text-gray-900">{region.collections}</p>
            </div>
            <div>
              <p className="text-gray-600">Success Rate</p>
              <p className="font-semibold text-gray-900">{region.rate}%</p>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${region.rate}%` }}
              ></div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            {region.customers.toLocaleString()} active customers
          </p>
        </div>
      ))}
    </div>
  );
};