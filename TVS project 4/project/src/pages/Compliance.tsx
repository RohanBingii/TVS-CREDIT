import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Clock, 
  Users, 
  Phone,
  Lock,
  Eye,
  Download,
  Filter,
  Calendar,
  MapPin,
  Volume2,
  PhoneOff
} from 'lucide-react';

export const Compliance: React.FC = () => {
  const [selectedCompliance, setSelectedCompliance] = useState('rbi');
  const [auditFilter, setAuditFilter] = useState('all');

  const complianceMetrics = [
    {
      title: 'RBI Compliance Score',
      value: '98.7%',
      status: 'excellent',
      icon: Shield,
      color: 'bg-green-500',
      details: 'Fair Practice Code adherence'
    },
    {
      title: 'TRAI Compliance',
      value: '96.2%',
      status: 'good',
      icon: Phone,
      color: 'bg-blue-500',
      details: 'DND and calling window compliance'
    },
    {
      title: 'Data Protection',
      value: '99.1%',
      status: 'excellent',
      icon: Lock,
      color: 'bg-purple-500',
      details: 'GDPR and data localization'
    },
    {
      title: 'Voice Recording Quality',
      value: '94.8%',
      status: 'good',
      icon: Volume2,
      color: 'bg-orange-500',
      details: 'Audio clarity and retention'
    }
  ];

  const regulatoryRequirements = [
    {
      category: 'RBI Guidelines',
      requirements: [
        {
          rule: 'Fair Practice Code',
          status: 'compliant',
          description: 'Respectful language and transparent communication',
          lastAudit: '2025-01-20'
        },
        {
          rule: 'Collection Practices',
          status: 'compliant',
          description: 'No harassment, threats, or undue pressure',
          lastAudit: '2025-01-18'
        },
        {
          rule: 'Customer Grievance Handling',
          status: 'compliant',
          description: 'Escalation mechanism for customer complaints',
          lastAudit: '2025-01-15'
        }
      ]
    },
    {
      category: 'TRAI Regulations',
      requirements: [
        {
          rule: 'DND Registry Compliance',
          status: 'compliant',
          description: 'No calls to DND registered numbers for marketing',
          lastAudit: '2025-01-22'
        },
        {
          rule: 'Calling Window Restrictions',
          status: 'warning',
          description: 'Calls only between 8 AM to 8 PM',
          lastAudit: '2025-01-21'
        },
        {
          rule: 'Consent Management',
          status: 'compliant',
          description: 'Proper consent capture and opt-out mechanisms',
          lastAudit: '2025-01-19'
        }
      ]
    },
    {
      category: 'Data Protection',
      requirements: [
        {
          rule: 'Data Localization',
          status: 'compliant',
          description: 'All data stored within Indian territory',
          lastAudit: '2025-01-20'
        },
        {
          rule: 'Encryption Standards',
          status: 'compliant',
          description: 'End-to-end encryption for sensitive data',
          lastAudit: '2025-01-17'
        },
        {
          rule: 'Access Controls',
          status: 'compliant',
          description: 'Role-based access and audit trails',
          lastAudit: '2025-01-16'
        }
      ]
    }
  ];

  const auditLogs = [
    {
      id: 'AUD001',
      type: 'Call Recording',
      timestamp: '2025-01-22 14:30:00',
      agent: 'System Auto-Check',
      finding: 'Compliant',
      details: 'All calls properly recorded and stored with 99.2% quality score',
      severity: 'info'
    },
    {
      id: 'AUD002',
      type: 'DND Violation',
      timestamp: '2025-01-22 11:15:00',
      agent: 'VoiceBot-47',
      finding: 'Non-Compliant',
      details: 'Call attempted to DND registered number - automatically blocked',
      severity: 'warning'
    },
    {
      id: 'AUD003',
      type: 'Language Compliance',
      timestamp: '2025-01-22 09:45:00',
      agent: 'Quality Team',
      finding: 'Compliant',
      details: 'Random sample of 50 calls reviewed - all within RBI guidelines',
      severity: 'info'
    },
    {
      id: 'AUD004',
      type: 'Data Access',
      timestamp: '2025-01-22 08:20:00',
      agent: 'System Security',
      finding: 'Compliant',
      details: 'All data access properly authenticated and logged',
      severity: 'info'
    },
    {
      id: 'AUD005',
      type: 'Calling Window',
      timestamp: '2025-01-21 20:15:00',
      agent: 'VoiceBot-23',
      finding: 'Violation Prevented',
      details: 'Attempt to call after 8 PM automatically blocked by system',
      severity: 'warning'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      compliant: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      violation: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSeverityColor = (severity: string) => {
    const colors = {
      info: 'bg-blue-100 text-blue-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800'
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getComplianceIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'good':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance Dashboard</h1>
          <p className="text-gray-600 mt-1">Regulatory compliance monitoring and audit management</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Audit
          </button>
        </div>
      </div>

      {/* Compliance Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {complianceMetrics.map((metric) => (
          <div key={metric.title} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              {getComplianceIcon(metric.status)}
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
            <p className="text-xs text-gray-500">{metric.details}</p>
          </div>
        ))}
      </div>

      {/* Regulatory Requirements Overview */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Regulatory Requirements Status</h2>
          <p className="text-sm text-gray-600 mt-1">Current compliance status across all regulatory frameworks</p>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            {regulatoryRequirements.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.requirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(req.status)}`}>
                            {req.status}
                          </span>
                          <h4 className="font-medium text-gray-900">{req.rule}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{req.description}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>Last Audit:</p>
                        <p>{req.lastAudit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Live Compliance Monitoring</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-green-900">DND Check Active</p>
                  <p className="text-xs text-green-700">All outbound calls being verified</p>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-green-900">Recording System</p>
                  <p className="text-xs text-green-700">All interactions being captured</p>
                </div>
              </div>
              <Volume2 className="h-5 w-5 text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Language Monitoring</p>
                  <p className="text-xs text-blue-700">AI analyzing conversation tone</p>
                </div>
              </div>
              <Eye className="h-5 w-5 text-blue-500" />
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-purple-900">Data Encryption</p>
                  <p className="text-xs text-purple-700">End-to-end security active</p>
                </div>
              </div>
              <Lock className="h-5 w-5 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Today's Compliance Stats</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Calls within window (8 AM - 8 PM)</span>
                <span className="text-sm font-bold text-gray-900">99.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.2%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">DND Compliance</span>
                <span className="text-sm font-bold text-gray-900">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Language Compliance</span>
                <span className="text-sm font-bold text-gray-900">97.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '97.8%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Recording Quality</span>
                <span className="text-sm font-bold text-gray-900">95.4%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95.4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Compliance Audit Trail</h2>
            <p className="text-sm text-gray-600 mt-1">Real-time compliance monitoring and violation tracking</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={auditFilter}
              onChange={(e) => setAuditFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="all">All Events</option>
              <option value="violations">Violations Only</option>
              <option value="warnings">Warnings</option>
              <option value="compliant">Compliant Events</option>
            </select>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audit ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent/System</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finding</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {log.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.agent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      log.finding === 'Compliant' ? 'bg-green-100 text-green-800' :
                      log.finding === 'Non-Compliant' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {log.finding}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {log.details}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(log.severity)}`}>
                      {log.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Checklist */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Monthly Compliance Checklist</h2>
          <p className="text-sm text-gray-600 mt-1">January 2025 compliance review items</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Completed Items</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-green-900">RBI Fair Practice Code Review</p>
                    <p className="text-xs text-green-700">Completed on Jan 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-green-900">TRAI DND Registry Update</p>
                    <p className="text-xs text-green-700">Completed on Jan 10, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-green-900">Data Security Audit</p>
                    <p className="text-xs text-green-700">Completed on Jan 8, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Pending Items</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium text-yellow-900">Voice Recording Quality Check</p>
                    <p className="text-xs text-yellow-700">Due: Jan 25, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Customer Grievance Report</p>
                    <p className="text-xs text-blue-700">Due: Jan 30, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Users className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-purple-900">Agent Training Compliance</p>
                    <p className="text-xs text-purple-700">Due: Jan 28, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};