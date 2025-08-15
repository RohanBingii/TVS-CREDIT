import React from 'react';

export const PaymentSuccessChart: React.FC = () => {
  const methods = ['UPI', 'Net Banking', 'Card', 'NACH'];
  const data = [94.2, 87.1, 82.4, 91.7];
  const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-orange-500'];

  return (
    <div className="space-y-4">
      {methods.map((method, index) => (
        <div key={method} className="flex items-center space-x-4">
          <div className="w-24 text-sm font-medium text-gray-700">{method}</div>
          <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
            <div
              className={`${colors[index]} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${data[index]}%` }}
            ></div>
          </div>
          <div className="w-12 text-sm font-semibold text-gray-900">
            {data[index]}%
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Overall Success Rate: <span className="font-semibold text-green-600">89.2%</span>
        </p>
      </div>
    </div>
  );
};