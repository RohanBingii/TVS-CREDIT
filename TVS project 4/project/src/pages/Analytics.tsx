import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Phone, 
  CreditCard, 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Target,
  Clock,
  Globe,
  MessageSquare
} from 'lucide-react';
import { CollectionTrendsChart } from '../components/CollectionTrendsChart';
import { CallVolumeChart } from '../components/CallVolumeChart';
import { LanguagePerformanceChart } from '../components/LanguagePerformanceChart';
import { RegionalAnalytics } from '../components/RegionalAnalytics';

export const Analytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('collection_rate');

  const kpis = [
    {
      title: 'Collection Rate',
      value: '68.4%',
      change: '+5.2%',
      trend: 'up',
      target: '70%',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Right Party Contact',
      value: '74.8%',
      change: '+8.1%',
      trend: 'up',
      target: '75%',
      icon: Phone,
      color: 'bg-blue-500'
    },
    {
      title: 'PTP Kept Rate',
      value: '62.3%',
      change: '+3.7%',
      trend: 'up',
      target: '65%',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      title: 'Avg Call Duration',
      value: '2:34',
      change: '-18s',
      trend: 'up',
      target: '2:30',
      icon: Clock,
      color: 'bg-orange-500'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Total Calls Made',
      value: '15,247',
      change: '+12.3%',
      period: 'Last 7 days'
    },
    {
      metric: 'Successful Connections',
      value: '11,405',
      change: '+15.8%',
      period: 'Last 7 days'
    },
    {
      metric: 'Payment Conversions',
      value: '7,798',
      change: '+22.1%',
      period: 'Last 7 days'
    },
    {
      metric: 'Revenue Collected',
      value: '₹2.8Cr',
      change: '+18.5%',
      period: 'Last 7 days'
    }
  ];

  const bucketPerformance = [
    {
      bucket: 'Pre-due (3-7 days)',
      calls: 2847,
      rpc: '82.4%',
      conversion: '45.2%',
      amount: '₹42.3L',
      trend: 'up'
    },
    {
      bucket: 'Due Date',
      calls: 3156,
      rpc: '78.9%',
      conversion: '38.7%',
      amount: '₹48.9L',
      trend: 'up'
    },
    {
      bucket: 'D+1 to D+7',
      calls: 4521,
      rpc: '71.2%',
      conversion: '32.4%',
      amount: '₹67.2L',
      trend: 'stable'
    },
    {
      bucket: 'D+8 to D+15',
      calls: 2894,
      rpc: '68.7%',
      conversion: '28.1%',
      amount: '₹41.8L',
      trend: 'down'
    },
    {
      bucket: 'D+16 to D+30',
      calls: 1829,
      rpc: '63.5%',
      conversion: '22.9%',
      amount: '₹29.4L',
      trend: 'down'
    }
  ];

  const sentimentAnalysis = [
    { sentiment: 'Positive', percentage: 45.2, count: 6892, color: 'bg-green-500' },
    { sentiment: 'Neutral', percentage: 38.7, count: 5901, color: 'bg-yellow-500' },
    { sentiment: 'Negative', percentage: 16.1, count: 2454, color: 'bg-red-500' }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive performance metrics and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="1d">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div key={kpi.title} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${kpi.color}`}>
                  <kpi.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getTrendIcon(kpi.trend)}
                <span className={`text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Target: {kpi.target}</p>
                <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                  <div 
                    className={`h-2 rounded-full ${kpi.color}`}
                    style={{ 
                      width: `${Math.min((parseFloat(kpi.value) / parseFloat(kpi.target)) * 100, 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => (
          <div key={metric.metric} className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.metric}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-600 font-medium">{metric.change}</span>
              <span className="text-xs text-gray-500">{metric.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection Trends</h3>
          <CollectionTrendsChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Volume Distribution</h3>
          <CallVolumeChart />
        </div>
      </div>

      {/* Bucket Performance Analysis */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Bucket Performance Analysis</h2>
          <p className="text-sm text-gray-600 mt-1">Performance metrics across different delinquency buckets</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bucket</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Calls</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RPC Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Collected</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bucketPerformance.map((bucket) => (
                <tr key={bucket.bucket} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{bucket.bucket}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {bucket.calls.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-blue-600 rounded-full"
                          style={{ width: bucket.rpc }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{bucket.rpc}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-green-600 rounded-full"
                          style={{ width: bucket.conversion }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{bucket.conversion}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {bucket.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getTrendIcon(bucket.trend)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Language Performance and Regional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Language Performance</h3>
          <LanguagePerformanceChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance</h3>
          <RegionalAnalytics />
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Customer Sentiment Analysis</h2>
          <p className="text-sm text-gray-600 mt-1">Real-time sentiment tracking from voice interactions</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sentimentAnalysis.map((sentiment) => (
              <div key={sentiment.sentiment} className="text-center">
                <div className="mb-4">
                  <div className="mx-auto w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center relative">
                    <div 
                      className={`absolute inset-0 rounded-full ${sentiment.color}`}
                      style={{
                        background: `conic-gradient(currentColor ${sentiment.percentage * 3.6}deg, transparent 0deg)`
                      }}
                    ></div>
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {sentiment.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{sentiment.sentiment}</h3>
                <p className="text-sm text-gray-600">{sentiment.count.toLocaleString()} interactions</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Sentiment Insights</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Most positive responses:</span>
                <span className="font-medium">Pre-due reminders (52.3%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Most challenging interactions:</span>
                <span className="font-medium">D+15+ collections (28.9% negative)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Sentiment improvement trend:</span>
                <span className="font-medium text-green-600">+4.2% positive vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights and Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">AI-Powered Insights</h2>
          <p className="text-sm text-gray-600 mt-1">Automated recommendations based on performance data</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                Opportunities
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Optimize Telugu call timing</p>
                  <p className="text-xs text-green-700">94% success rate between 6-7 PM vs 67% other times</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Increase UPI adoption</p>
                  <p className="text-xs text-blue-700">UPI shows 23% higher conversion vs other methods</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-900">Focus on D+3-7 bucket</p>
                  <p className="text-xs text-purple-700">Highest ROI potential with 45% conversion rate</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                Recommended Actions
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium text-yellow-900">Reduce D+15+ call frequency</p>
                  <p className="text-xs text-yellow-700">Low conversion (22%) with high negative sentiment</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium text-orange-900">Train agents on Kannada scripts</p>
                  <p className="text-xs text-orange-700">Language barrier causing 15% lower performance</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-sm font-medium text-red-900">Review payment gateway settings</p>
                  <p className="text-xs text-red-700">18% card payment failures in last 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};