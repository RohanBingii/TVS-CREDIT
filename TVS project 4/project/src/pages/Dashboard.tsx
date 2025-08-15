import React from 'react';
import { 
  Phone, 
  TrendingUp, 
  Users, 
  CreditCard, 
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import { useVoiceBot } from '../contexts/VoiceBotContext';
import { StatsCard } from '../components/StatsCard';
import { CallActivityChart } from '../components/CallActivityChart';
import { PaymentSuccessChart } from '../components/PaymentSuccessChart';
import { RecentActivity } from '../components/RecentActivity';
import { LanguageDistribution } from '../components/LanguageDistribution';

export const Dashboard: React.FC = () => {
  const { state } = useVoiceBot();

  const stats = [
    {
      title: 'Active Calls',
      value: '24',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Phone,
      color: 'bg-blue-500'
    },
    {
      title: 'Collection Rate',
      value: '68.4%',
      change: '+5.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Total Customers',
      value: '125,842',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Payments Today',
      value: '₹42.3L',
      change: '+8.7%',
      changeType: 'positive' as const,
      icon: CreditCard,
      color: 'bg-orange-500'
    },
    {
      title: 'Avg Call Duration',
      value: '2:34',
      change: '-18s',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'bg-teal-500'
    },
    {
      title: 'PTP Kept Rate',
      value: '74.2%',
      change: '+3.1%',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'bg-indigo-500'
    },
    {
      title: 'Overdue Accounts',
      value: '12,847',
      change: '-4.2%',
      changeType: 'positive' as const,
      icon: AlertCircle,
      color: 'bg-red-500'
    },
    {
      title: 'Revenue Protected',
      value: '₹8.9Cr',
      change: '+12%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">VoiceBot Dashboard</h1>
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            System Healthy
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            87 bots active
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Activity (24h)</h3>
          <CallActivityChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Success Rate</h3>
          <PaymentSuccessChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <LanguageDistribution />
        </div>
      </div>

      {/* Real-time Alerts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Alerts</h3>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-green-900">High conversion rate detected</p>
              <p className="text-xs text-green-700">Current UPI payment success: 94.2% (+12% vs yesterday)</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-orange-50 rounded-lg">
            <AlertCircle className="h-5 w-5 text-orange-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-orange-900">Increased Tamil language requests</p>
              <p className="text-xs text-orange-700">+23% Tamil calls in South region - scaling resources</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <Phone className="h-5 w-5 text-blue-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-blue-900">Peak calling hours optimization</p>
              <p className="text-xs text-blue-700">Best RPC times: 10-11 AM (32.4%) and 7-8 PM (29.1%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};