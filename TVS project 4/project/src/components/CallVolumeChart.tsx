import React from 'react';

export const CallVolumeChart: React.FC = () => {
  const timeSlots = ['6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22'];
  const volumes = [120, 340, 520, 680, 590, 750, 920, 640];
  const maxVolume = Math.max(...volumes);

  return (
    <div className="space-y-3">
      {timeSlots.map((slot, index) => (
        <div key={slot} className="flex items-center space-x-4">
          <div className="w-16 text-sm font-medium text-gray-700">{slot}</div>
          <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${(volumes[index] / maxVolume) * 100}%` }}
            >
              <span className="text-white text-xs font-medium">
                {volumes[index]}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-600">
          Peak hours: <span className="font-semibold text-blue-600">6-8 PM</span> (920 calls)
        </p>
      </div>
    </div>
  );
};