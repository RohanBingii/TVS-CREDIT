import React, { useState } from 'react';
import { 
  Phone, 
  PhoneCall, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Pause,
  Play,
  Filter,
  Download,
  Search,
  MapPin,
  MessageCircle,
  Mic,
  Volume2
} from 'lucide-react';
import { useVoiceBot } from '../contexts/VoiceBotContext';

export const CallManagement: React.FC = () => {
  const { state } = useVoiceBot();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCall, setSelectedCall] = useState<number | null>(null);

  const callFilters = [
    { id: 'all', label: 'All Calls', count: 1247 },
    { id: 'active', label: 'Active', count: 24 },
    { id: 'completed', label: 'Completed', count: 892 },
    { id: 'missed', label: 'Missed', count: 156 },
    { id: 'rpc', label: 'Right Party Contact', count: 675 },
  ];

  const activeCalls = [
    {
      id: 1,
      customerName: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      language: 'Hindi',
      bucket: 'D+3',
      emiAmount: 8500,
      duration: '1:23',
      status: 'negotiating',
      sentiment: 'neutral',
      intent: 'reschedule'
    },
    {
      id: 2,
      customerName: 'Priya Sharma',
      phone: '+91 98765 43211',
      language: 'English',
      bucket: 'Pre-due',
      emiAmount: 5200,
      duration: '0:45',
      status: 'payment_processing',
      sentiment: 'positive',
      intent: 'pay_now'
    },
    {
      id: 3,
      customerName: 'Arjun Reddy',
      phone: '+91 98765 43212',
      language: 'Telugu',
      bucket: 'D+1',
      emiAmount: 7800,
      duration: '2:10',
      status: 'collecting_details',
      sentiment: 'frustrated',
      intent: 'partial_payment'
    }
  ];

  const recentCalls = [
    {
      id: 101,
      customerName: 'Amit Patel',
      phone: '+91 98765 43213',
      language: 'Gujarati',
      outcome: 'Payment Successful',
      amount: 6500,
      duration: '3:24',
      time: '10:23 AM',
      sentiment: 'positive'
    },
    {
      id: 102,
      customerName: 'Sunita Singh',
      phone: '+91 98765 43214',
      language: 'Hindi',
      outcome: 'PTP Committed',
      amount: 9200,
      duration: '4:15',
      time: '10:18 AM',
      sentiment: 'neutral'
    },
    {
      id: 103,
      customerName: 'Mohammed Ali',
      phone: '+91 98765 43215',
      language: 'English',
      outcome: 'No Answer',
      amount: 5800,
      duration: '0:00',
      time: '10:15 AM',
      sentiment: 'N/A'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      negotiating: 'bg-yellow-100 text-yellow-800',
      payment_processing: 'bg-blue-100 text-blue-800',
      collecting_details: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSentimentColor = (sentiment: string) => {
    const colors = {
      positive: 'text-green-600',
      neutral: 'text-yellow-600',
      frustrated: 'text-red-600',
      'N/A': 'text-gray-400'
    };
    return colors[sentiment as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Call Management</h1>
          <p className="text-gray-600 mt-1">Real-time call monitoring and management</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Play className="h-4 w-4 mr-2" />
            Start Campaign
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            <Pause className="h-4 w-4 mr-2" />
            Pause All
          </button>
        </div>
      </div>

      {/* Live Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Calls</p>
              <p className="text-3xl font-bold text-blue-600">24</p>
            </div>
            <Phone className="h-8 w-8 text-blue-500" />
          </div>
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <p className="text-xs text-gray-500">Live monitoring</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Duration</p>
              <p className="text-3xl font-bold text-green-600">2:34</p>
            </div>
            <Clock className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-green-600 mt-2">-18s vs yesterday</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-3xl font-bold text-purple-600">68%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xs text-purple-600 mt-2">+5.2% today</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Queue Size</p>
              <p className="text-3xl font-bold text-orange-600">156</p>
            </div>
            <PhoneCall className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-xs text-orange-600 mt-2">Estimated wait: 8min</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search calls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>

        <div className="flex space-x-1 mb-6">
          {callFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Active Calls */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Active Calls</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {activeCalls.map((call) => (
            <div key={call.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{call.customerName}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {call.phone}
                      </span>
                      <span>{call.language}</span>
                      <span className="font-medium">EMI: ₹{call.emiAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="text-lg font-semibold text-gray-900">{call.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Bucket</p>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                      {call.bucket}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(call.status)}`}>
                      {call.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Sentiment</p>
                    <p className={`text-sm font-medium ${getSentimentColor(call.sentiment)}`}>
                      {call.sentiment}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Volume2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              {call.intent && (
                <div className="mt-3 pl-14">
                  <div className="flex items-center space-x-2">
                    <Mic className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Current Intent: <span className="font-medium text-gray-900">{call.intent.replace('_', ' ')}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Completed Calls */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Recent Completed Calls</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sentiment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentCalls.map((call) => (
                <tr key={call.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{call.customerName}</div>
                      <div className="text-sm text-gray-500">{call.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{call.language}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      call.outcome === 'Payment Successful' ? 'bg-green-100 text-green-800' :
                      call.outcome === 'PTP Committed' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {call.outcome}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{call.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{call.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getSentimentColor(call.sentiment)}`}>
                      {call.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Replay</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};