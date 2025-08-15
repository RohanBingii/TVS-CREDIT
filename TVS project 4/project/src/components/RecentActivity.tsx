import React from 'react';
import { CheckCircle, Phone, CreditCard, MessageCircle } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'payment',
      message: 'Payment successful for Rajesh Kumar - ₹8,500',
      time: '2 minutes ago',
      icon: CreditCard,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 2,
      type: 'call',
      message: 'Successful call completed with Priya Sharma',
      time: '5 minutes ago',
      icon: Phone,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      type: 'ptp',
      message: 'Promise to Pay received from Arjun Reddy for ₹7,800',
      time: '8 minutes ago',
      icon: CheckCircle,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 4,
      type: 'message',
      message: 'WhatsApp payment link sent to 3 customers',
      time: '12 minutes ago',
      icon: MessageCircle,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 5,
      type: 'payment',
      message: 'Failed payment retry for Mohammed Khan - will retry in 30 min',
      time: '15 minutes ago',
      icon: CreditCard,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`${activity.bgColor} h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}>
                        <activity.icon className={`h-4 w-4 ${activity.iconColor}`} aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900">{activity.message}</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time>{activity.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};