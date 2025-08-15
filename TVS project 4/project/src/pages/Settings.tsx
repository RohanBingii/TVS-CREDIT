import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Globe, 
  Phone, 
  Shield, 
  Bell, 
  Clock, 
  Mic,
  Volume2,
  Database,
  Key,
  Users,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    general: {
      systemName: 'TVS VoiceBot',
      timezone: 'Asia/Kolkata',
      language: 'en',
      maxConcurrentCalls: 100,
      callRetryAttempts: 3,
      callRetryInterval: 30
    },
    voice: {
      speechRate: 1.0,
      speechVolume: 0.8,
      speechPitch: 1.0,
      silenceTimeout: 3,
      interruptionHandling: true,
      backgroundNoiseReduction: true
    },
    compliance: {
      recordAllCalls: true,
      dndCheckEnabled: true,
      callingWindowStart: '08:00',
      callingWindowEnd: '20:00',
      consentRequired: true,
      dataRetentionDays: 365
    },
    notifications: {
      emailAlerts: true,
      smsAlerts: false,
      dashboardNotifications: true,
      complianceAlerts: true,
      performanceAlerts: true,
      systemHealthAlerts: true
    },
    security: {
      sessionTimeout: 30,
      passwordComplexity: true,
      twoFactorAuth: false,
      apiRateLimit: 1000,
      encryptionLevel: 'AES-256',
      auditLogging: true
    },
    integration: {
      crmSystem: 'Salesforce',
      paymentGateway: 'Razorpay',
      smsProvider: 'Twilio',
      emailProvider: 'SendGrid',
      analyticsProvider: 'Custom',
      backupFrequency: 'daily'
    }
  });

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'voice', label: 'Voice & Speech', icon: Mic },
    { id: 'compliance', label: 'Compliance', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Key },
    { id: 'integration', label: 'Integrations', icon: Database }
  ];

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' }
  ];

  const handleSettingChange = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
            <input
              type="text"
              value={settings.general.systemName}
              onChange={(e) => handleSettingChange('general', 'systemName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={settings.general.timezone}
              onChange={(e) => handleSettingChange('general', 'timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Language Support</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {languages.map((lang) => (
            <div key={lang.code} className="flex items-center p-3 border rounded-lg">
              <input
                type="checkbox"
                id={lang.code}
                defaultChecked
                className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={lang.code} className="flex-1">
                <div className="text-sm font-medium text-gray-900">{lang.name}</div>
                <div className="text-xs text-gray-500">{lang.native}</div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Concurrent Calls</label>
            <input
              type="number"
              value={settings.general.maxConcurrentCalls}
              onChange={(e) => handleSettingChange('general', 'maxConcurrentCalls', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Retry Attempts</label>
            <input
              type="number"
              value={settings.general.callRetryAttempts}
              onChange={(e) => handleSettingChange('general', 'callRetryAttempts', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Retry Interval (minutes)</label>
            <input
              type="number"
              value={settings.general.callRetryInterval}
              onChange={(e) => handleSettingChange('general', 'callRetryInterval', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderVoiceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Speech Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Speech Rate</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={settings.voice.speechRate}
              onChange={(e) => handleSettingChange('voice', 'speechRate', parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Slow</span>
              <span>{settings.voice.speechRate}x</span>
              <span>Fast</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Volume</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={settings.voice.speechVolume}
              onChange={(e) => handleSettingChange('voice', 'speechVolume', parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Quiet</span>
              <span>{Math.round(settings.voice.speechVolume * 100)}%</span>
              <span>Loud</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pitch</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={settings.voice.speechPitch}
              onChange={(e) => handleSettingChange('voice', 'speechPitch', parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>{settings.voice.speechPitch}x</span>
              <span>High</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversation Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Enable Interruption Handling</label>
              <p className="text-xs text-gray-500">Allow customers to interrupt the bot</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.voice.interruptionHandling}
                onChange={(e) => handleSettingChange('voice', 'interruptionHandling', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Background Noise Reduction</label>
              <p className="text-xs text-gray-500">Filter background noise during calls</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.voice.backgroundNoiseReduction}
                onChange={(e) => handleSettingChange('voice', 'backgroundNoiseReduction', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Silence Timeout (seconds)</label>
            <input
              type="number"
              value={settings.voice.silenceTimeout}
              onChange={(e) => handleSettingChange('voice', 'silenceTimeout', parseInt(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderComplianceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recording & Monitoring</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Record All Calls</label>
              <p className="text-xs text-gray-500">Enable call recording for compliance</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.compliance.recordAllCalls}
                onChange={(e) => handleSettingChange('compliance', 'recordAllCalls', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">DND Registry Check</label>
              <p className="text-xs text-gray-500">Check DND status before calling</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.compliance.dndCheckEnabled}
                onChange={(e) => handleSettingChange('compliance', 'dndCheckEnabled', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Calling Window</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
            <input
              type="time"
              value={settings.compliance.callingWindowStart}
              onChange={(e) => handleSettingChange('compliance', 'callingWindowStart', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
            <input
              type="time"
              value={settings.compliance.callingWindowEnd}
              onChange={(e) => handleSettingChange('compliance', 'callingWindowEnd', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Retention</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention Period (days)</label>
          <input
            type="number"
            value={settings.compliance.dataRetentionDays}
            onChange={(e) => handleSettingChange('compliance', 'dataRetentionDays', parseInt(e.target.value))}
            className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Calls and data will be automatically deleted after this period</p>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Preferences</h3>
        <div className="space-y-4">
          {[
            { key: 'emailAlerts', label: 'Email Alerts', description: 'Receive alerts via email' },
            { key: 'smsAlerts', label: 'SMS Alerts', description: 'Receive critical alerts via SMS' },
            { key: 'dashboardNotifications', label: 'Dashboard Notifications', description: 'Show notifications in dashboard' },
            { key: 'complianceAlerts', label: 'Compliance Alerts', description: 'Get notified about compliance issues' },
            { key: 'performanceAlerts', label: 'Performance Alerts', description: 'Alerts for performance degradation' },
            { key: 'systemHealthAlerts', label: 'System Health Alerts', description: 'System status and health notifications' }
          ].map((setting) => (
            <div key={setting.key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">{setting.label}</label>
                <p className="text-xs text-gray-500">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications[setting.key as keyof typeof settings.notifications]}
                  onChange={(e) => handleSettingChange('notifications', setting.key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication & Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
            <input
              type="number"
              value={settings.security.sessionTimeout}
              onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">API Rate Limit (requests/hour)</label>
            <input
              type="number"
              value={settings.security.apiRateLimit}
              onChange={(e) => handleSettingChange('security', 'apiRateLimit', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Password Complexity Requirements</label>
              <p className="text-xs text-gray-500">Enforce strong password policies</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.passwordComplexity}
                onChange={(e) => handleSettingChange('security', 'passwordComplexity', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
              <p className="text-xs text-gray-500">Require 2FA for admin access</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.twoFactorAuth}
                onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Audit Logging</label>
              <p className="text-xs text-gray-500">Log all system activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.auditLogging}
                onChange={(e) => handleSettingChange('security', 'auditLogging', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIntegrationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">External Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: 'crmSystem', label: 'CRM System', options: ['Salesforce', 'HubSpot', 'Custom'] },
            { key: 'paymentGateway', label: 'Payment Gateway', options: ['Razorpay', 'PayU', 'BillDesk'] },
            { key: 'smsProvider', label: 'SMS Provider', options: ['Twilio', 'MSG91', 'TextLocal'] },
            { key: 'emailProvider', label: 'Email Provider', options: ['SendGrid', 'AWS SES', 'Mailgun'] }
          ].map((integration) => (
            <div key={integration.key}>
              <label className="block text-sm font-medium text-gray-700 mb-2">{integration.label}</label>
              <select
                value={settings.integration[integration.key as keyof typeof settings.integration]}
                onChange={(e) => handleSettingChange('integration', integration.key, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {integration.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
          <select
            value={settings.integration.backupFrequency}
            onChange={(e) => handleSettingChange('integration', 'backupFrequency', e.target.value)}
            className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'voice':
        return renderVoiceSettings();
      case 'compliance':
        return renderComplianceSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'security':
        return renderSecuritySettings();
      case 'integration':
        return renderIntegrationSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure system settings and preferences</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Settings Navigation and Content */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-64 border-r border-gray-200">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className={`mr-3 h-5 w-5 ${
                    activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Configuration Valid</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-600">Last saved: {new Date().toLocaleString()}</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Changes will take effect after applying
          </div>
        </div>
      </div>
    </div>
  );
};