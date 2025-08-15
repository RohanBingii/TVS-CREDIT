import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Clock,
  Globe,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { useVoiceBot } from '../contexts/VoiceBotContext';

export const CustomerManagement: React.FC = () => {
  const { state } = useVoiceBot();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const customerProfiles = [
    {
      customerId: 1,
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@email.com',
      language: 'Hindi',
      region: 'North Delhi',
      loans: [
        {
          loanId: 101,
          productType: 'Bike Loan',
          emiAmount: 8500,
          dueDate: '2025-01-25',
          status: 'current',
          totalAmount: 425000,
          paidAmount: 340000,
          remainingAmount: 85000
        }
      ],
      callHistory: {
        totalCalls: 12,
        successfulCalls: 9,
        lastCallDate: '2025-01-22',
        avgCallDuration: '2:45',
        preferredCallTime: '7:00 PM - 8:00 PM'
      },
      paymentHistory: {
        totalPayments: 40,
        onTimePayments: 38,
        latePayments: 2,
        lastPaymentDate: '2024-12-25',
        averagePaymentDelay: '1 day'
      },
      riskProfile: {
        score: 720,
        category: 'Low Risk',
        factors: ['Consistent payment history', 'Stable income', 'Good call response']
      },
      preferences: {
        communicationChannel: 'Voice Call',
        language: 'Hindi',
        bestContactTime: 'Evening',
        paymentMethod: 'UPI'
      }
    },
    {
      customerId: 2,
      name: 'Priya Sharma',
      phone: '+91 98765 43211',
      email: 'priya.sharma@email.com',
      language: 'English',
      region: 'Mumbai',
      loans: [
        {
          loanId: 102,
          productType: 'Consumer Durable',
          emiAmount: 5200,
          dueDate: '2025-01-23',
          status: 'overdue',
          totalAmount: 156000,
          paidAmount: 124000,
          remainingAmount: 32000
        }
      ],
      callHistory: {
        totalCalls: 8,
        successfulCalls: 6,
        lastCallDate: '2025-01-21',
        avgCallDuration: '3:20',
        preferredCallTime: '10:00 AM - 11:00 AM'
      },
      paymentHistory: {
        totalPayments: 24,
        onTimePayments: 20,
        latePayments: 4,
        lastPaymentDate: '2024-12-20',
        averagePaymentDelay: '3 days'
      },
      riskProfile: {
        score: 580,
        category: 'Medium Risk',
        factors: ['Recent late payments', 'Reduced call response', 'Job change indicated']
      },
      preferences: {
        communicationChannel: 'WhatsApp',
        language: 'English',
        bestContactTime: 'Morning',
        paymentMethod: 'Net Banking'
      }
    },
    {
      customerId: 3,
      name: 'Arjun Reddy',
      phone: '+91 98765 43212',
      email: 'arjun.reddy@email.com',
      language: 'Telugu',
      region: 'Hyderabad',
      loans: [
        {
          loanId: 103,
          productType: 'Bike Loan',
          emiAmount: 7800,
          dueDate: '2025-01-26',
          status: 'current',
          totalAmount: 390000,
          paidAmount: 234000,
          remainingAmount: 156000
        }
      ],
      callHistory: {
        totalCalls: 15,
        successfulCalls: 14,
        lastCallDate: '2025-01-22',
        avgCallDuration: '1:58',
        preferredCallTime: '6:30 PM - 7:30 PM'
      },
      paymentHistory: {
        totalPayments: 30,
        onTimePayments: 30,
        latePayments: 0,
        lastPaymentDate: '2024-12-26',
        averagePaymentDelay: '0 days'
      },
      riskProfile: {
        score: 780,
        category: 'Low Risk',
        factors: ['Perfect payment record', 'High call engagement', 'Stable employment']
      },
      preferences: {
        communicationChannel: 'Voice Call',
        language: 'Telugu',
        bestContactTime: 'Evening',
        paymentMethod: 'UPI'
      }
    }
  ];

  const getRiskColor = (category: string) => {
    const colors = {
      'Low Risk': 'bg-green-100 text-green-800',
      'Medium Risk': 'bg-yellow-100 text-yellow-800',
      'High Risk': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'current': 'bg-green-100 text-green-800',
      'overdue': 'bg-red-100 text-red-800',
      'closed': 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive customer profiles and interaction history</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-3xl font-bold text-gray-900">125,842</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-sm text-green-600 mt-2">+2.1% vs last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Loans</p>
              <p className="text-3xl font-bold text-gray-900">89,456</p>
            </div>
            <CreditCard className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-sm text-green-600 mt-2">+1.8% active growth</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">At-Risk Customers</p>
              <p className="text-3xl font-bold text-gray-900">12,847</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-sm text-red-600 mt-2">-4.2% improvement</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Customer Score</p>
              <p className="text-3xl font-bold text-gray-900">692</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-sm text-purple-600 mt-2">+15 points improved</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="current">Current</option>
              <option value="overdue">Overdue</option>
              <option value="closed">Closed</option>
            </select>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Customer Profiles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {customerProfiles.map((customer) => (
          <div key={customer.customerId} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            {/* Customer Header */}
            <div className="p-6 border-b">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </span>
                      <span className="flex items-center">
                        <Globe className="h-3 w-3 mr-1" />
                        {customer.language}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(customer.riskProfile.category)}`}>
                  {customer.riskProfile.category}
                </span>
              </div>
            </div>

            {/* Loan Information */}
            <div className="p-6 border-b">
              <h4 className="font-medium text-gray-900 mb-3">Active Loans</h4>
              {customer.loans.map((loan) => (
                <div key={loan.loanId} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{loan.productType}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(loan.status)}`}>
                      {loan.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">EMI Amount</span>
                    <span className="font-semibold text-gray-900">₹{loan.emiAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Due Date</span>
                    <span className="text-gray-900">{new Date(loan.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(loan.paidAmount / loan.totalAmount) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>₹{loan.paidAmount.toLocaleString()} paid</span>
                    <span>₹{loan.remainingAmount.toLocaleString()} remaining</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call & Payment Stats */}
            <div className="p-6 border-b">
              <h4 className="font-medium text-gray-900 mb-3">Interaction Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900">Call History</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-medium">{Math.round((customer.callHistory.successfulCalls / customer.callHistory.totalCalls) * 100)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Duration</span>
                      <span className="font-medium">{customer.callHistory.avgCallDuration}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <CreditCard className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-900">Payment History</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">On-Time Rate</span>
                      <span className="font-medium">{Math.round((customer.paymentHistory.onTimePayments / customer.paymentHistory.totalPayments) * 100)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Delay</span>
                      <span className="font-medium">{customer.paymentHistory.averagePaymentDelay}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="p-6 border-b">
              <h4 className="font-medium text-gray-900 mb-3">Risk Assessment</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Risk Score</span>
                <span className="text-lg font-bold text-gray-900">{customer.riskProfile.score}</span>
              </div>
              <div className="space-y-1">
                {customer.riskProfile.factors.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-gray-600">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="p-6">
              <h4 className="font-medium text-gray-900 mb-3">Communication Preferences</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Preferred Channel</span>
                  <span className="font-medium">{customer.preferences.communicationChannel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Time</span>
                  <span className="font-medium">{customer.preferences.bestContactTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium">{customer.preferences.paymentMethod}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                  Call Now
                </button>
                <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};