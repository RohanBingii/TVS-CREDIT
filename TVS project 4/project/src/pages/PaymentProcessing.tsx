import React, { useState } from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Phone,
  Smartphone,
  Globe,
  RefreshCw,
  Filter,
  Download,
  Eye,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export const PaymentProcessing: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [selectedMethod, setSelectedMethod] = useState('all');

  const paymentStats = [
    {
      title: 'Total Collections Today',
      value: '₹42.3L',
      change: '+₹3.8L',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Payment Success Rate',
      value: '89.2%',
      change: '+5.3%',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'bg-blue-500'
    },
    {
      title: 'Avg Processing Time',
      value: '12s',
      change: '-3s',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Failed Transactions',
      value: '142',
      change: '-23',
      changeType: 'positive' as const,
      icon: XCircle,
      color: 'bg-red-500'
    }
  ];

  const paymentMethods = [
    {
      method: 'UPI',
      count: 1247,
      amount: '₹18.5L',
      successRate: '94.2%',
      avgTime: '8s',
      trend: 'up',
      trendValue: '+12%'
    },
    {
      method: 'Net Banking',
      count: 432,
      amount: '₹12.8L',
      successRate: '87.1%',
      avgTime: '18s',
      trend: 'up',
      trendValue: '+3%'
    },
    {
      method: 'Card Payment',
      count: 298,
      amount: '₹8.9L',
      successRate: '82.4%',
      avgTime: '15s',
      trend: 'down',
      trendValue: '-2%'
    },
    {
      method: 'NACH/Auto-Pay',
      count: 156,
      amount: '₹2.1L',
      successRate: '91.7%',
      avgTime: '5s',
      trend: 'up',
      trendValue: '+8%'
    }
  ];

  const recentTransactions = [
    {
      id: 'TXN001',
      customerName: 'Rajesh Kumar',
      amount: 8500,
      method: 'UPI',
      status: 'success',
      time: '10:45 AM',
      loanId: 'LN12345',
      processingTime: '6s'
    },
    {
      id: 'TXN002',
      customerName: 'Priya Sharma',
      amount: 5200,
      method: 'Net Banking',
      status: 'success',
      time: '10:42 AM',
      loanId: 'LN12346',
      processingTime: '14s'
    },
    {
      id: 'TXN003',
      customerName: 'Arjun Reddy',
      amount: 7800,
      method: 'Card',
      status: 'failed',
      time: '10:40 AM',
      loanId: 'LN12347',
      processingTime: '22s'
    },
    {
      id: 'TXN004',
      customerName: 'Sunita Singh',
      amount: 9200,
      method: 'UPI',
      status: 'pending',
      time: '10:38 AM',
      loanId: 'LN12348',
      processingTime: '8s'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      success: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'upi':
        return Smartphone;
      case 'net banking':
        return Globe;
      case 'card':
      case 'card payment':
        return CreditCard;
      case 'nach/auto-pay':
        return RefreshCw;
      default:
        return CreditCard;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment Processing</h1>
          <p className="text-gray-600 mt-1">Real-time payment monitoring and transaction management</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Payment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center mt-3">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs yesterday</span>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Methods Performance */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Payment Methods Performance</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method) => {
              const IconComponent = getMethodIcon(method.method);
              return (
                <div key={method.method} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg">
                        <IconComponent className="h-5 w-5 text-gray-700" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{method.method}</h3>
                    </div>
                    <div className={`flex items-center space-x-1 text-xs ${
                      method.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {method.trend === 'up' ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      <span>{method.trendValue}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Transactions</span>
                      <span className="font-medium">{method.count.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Amount</span>
                      <span className="font-medium">{method.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-medium text-green-600">{method.successRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Avg Time</span>
                      <span className="font-medium">{method.avgTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* UPI Payment Flow Visualization */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">UPI Payment Flow (Real-time)</h2>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Voice Call</p>
                <p className="text-xs text-gray-500">Customer confirms payment</p>
              </div>
              <div className="flex-1 h-px bg-gray-300 relative">
                <div className="absolute inset-y-0 left-0 w-3/4 bg-blue-600 h-full"></div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">UPI Link Sent</p>
                <p className="text-xs text-gray-500">WhatsApp/SMS delivery</p>
              </div>
              <div className="flex-1 h-px bg-gray-300 relative">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-green-600 h-full"></div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Payment Success</p>
                <p className="text-xs text-gray-500">Auto-confirmation</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-900">Active UPI Sessions</p>
                <p className="text-2xl font-bold text-blue-900">47</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Avg Completion Time</p>
                <p className="text-2xl font-bold text-blue-900">45s</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Success Rate (Last Hour)</p>
                <p className="text-2xl font-bold text-blue-900">96.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
          <div className="flex items-center space-x-3">
            <select
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="all">All Methods</option>
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
              <option value="card">Card Payment</option>
            </select>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processing Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{transaction.customerName}</div>
                      <div className="text-sm text-gray-500">{transaction.loanId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ₹{transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {React.createElement(getMethodIcon(transaction.method), { className: "h-4 w-4 text-gray-500" })}
                      <span className="text-sm text-gray-900">{transaction.method}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.processingTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Gateway Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Gateway Health Status</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium text-green-900">Razorpay</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-900">99.8% Uptime</p>
                <p className="text-xs text-green-700">Response: 120ms</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium text-green-900">PayU</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-900">99.5% Uptime</p>
                <p className="text-xs text-green-700">Response: 145ms</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="font-medium text-yellow-900">BillDesk</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-yellow-900">97.2% Uptime</p>
                <p className="text-xs text-yellow-700">Response: 230ms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Payment Alerts</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-900">High failure rate detected</p>
                <p className="text-xs text-red-700">Card payments showing 18% failure in last 30 minutes</p>
                <p className="text-xs text-red-600 mt-1">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">UPI performance optimized</p>
                <p className="text-xs text-blue-700">Success rate improved to 96.8% after gateway switch</p>
                <p className="text-xs text-blue-600 mt-1">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-900">Payment volume surge</p>
                <p className="text-xs text-green-700">45% increase in transactions compared to last hour</p>
                <p className="text-xs text-green-600 mt-1">32 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};